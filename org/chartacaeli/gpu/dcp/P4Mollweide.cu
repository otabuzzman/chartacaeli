#include <cstdio>
#include <cstdlib>

#include <math_constants.h>

#include "P4Mollweide.h"
#include "Coordinate.h"
#include "Math.h"

// from CUDA Toolkit samples
#include <helper_cuda.h>

__device__ P4Mollweide::P4Mollweide() : V_CON( 1e-7 ),
								radperdeg( 3.141592653589793/180. ) ,
								degperrad( 180./3.141592653589793 ) {
	init( 0, 0, 1, 1 ) ;
}

__device__ void P4Mollweide::init( double lam0, double phi1, double R, double k0 ) {
	this->lam0 = lam0 ;
	this->R = R ;
}

__device__ Coordinate& P4Mollweide::forward( const Coordinate& lamphi, Coordinate& xy ) {
	double tht2 = lamphi.y, dtht2 = 0, sintht2, costht2 ;
	double sinphi, tht, sintht, costht ;

	sinphi = sinpi( lamphi.y/180 ) ;

	do {
		tht2 = tht2+dtht2 ;

		sincospi( tht2/180, &sintht2, &costht2 ) ;

		dtht2 = -( tht2*radperdeg+sintht2-CUDART_PI*sinphi )/( 1+costht2 )*degperrad ;
	} while ( abs( dtht2 )>V_CON ) ;

	tht = tht2*.5 ;
	sincospi( tht/180, &sintht, &costht ) ;

	xy.x = ( 2.82842712475/CUDART_PI )*R*( lamphi.x-lam0 )*costht*radperdeg ;
	xy.y = 1.41421356237*R*sintht ;

	return xy ;
}

__device__ Coordinate& P4Mollweide::inverse( const Coordinate& xy, Coordinate& lamphi ) {
	double tht, sin2tht, costht ;

	tht = degrees( asin( xy.y/( 1.41421356237*R ) ) ) ;

	sin2tht = sinpi( ( 2*tht )/180 ) ;
	lamphi.y = degrees( asin( ( 2*tht*radperdeg+sin2tht )/CUDART_PI ) ) ;

	if ( abs( lamphi.y ) == 90 )
		lamphi.x = lam0 ;
	else {
		costht = cospi( tht/180 ) ;
		lamphi.x = lam0+( CUDART_PI*xy.x/( 2.82842712475*R*costht ) )*degperrad ;
	}

	return lamphi ;
}

#ifdef P4MOLLWEIDE_MAIN
// kernel
__global__ void p4mollweide( double* buf ) {
	P4Mollweide proj ;
	Coordinate lamphi, xy, res ;
	int i = threadIdx.x ;

	lamphi.set( (double) i, (double) ( i%90 ), 0 ) ;
	proj.forward( lamphi, xy ) ;
	proj.inverse( xy, res ) ;
	buf[2*i] = res.x ;
	buf[2*i+1] = res.y ;
}

#define NUM_BLOCKS 1
#define NUM_THREADS 360

int main( int argc, char** argv ) {
	// host buffer
	double buf[2*NUM_THREADS] ;
	// device buffer
	double* dbuf = NULL ;
	cudaDeviceProp devProp ;
	int devID ;

	// find device and output compute capability on stderr
	devID = gpuGetMaxGflopsDeviceId() ;
	checkCudaErrors( cudaSetDevice( devID ) ) ;
	checkCudaErrors( cudaGetDeviceProperties( &devProp, devID ) ) ;
	fprintf( stderr, "%d%d\n", devProp.major, devProp.minor ) ;

	// allocate device buffer memory
	checkCudaErrors( cudaMalloc( (void**) &dbuf, sizeof( double )*2*NUM_THREADS ) ) ;

	// run kernel
	p4mollweide<<<NUM_BLOCKS, NUM_THREADS>>>( dbuf ) ;

	// copy kernel results from device buffer to host
	checkCudaErrors( cudaMemcpy( buf, dbuf, sizeof( double )*2*NUM_THREADS, cudaMemcpyDeviceToHost ) ) ;
	checkCudaErrors( cudaFree( dbuf ) ) ;

	// output result on stdout
	for ( int i=0 ; NUM_THREADS>i ; i++ )
		printf( "%.4f %.4f\n", buf[2*i], buf[2*i+1] ) ;

	return EXIT_SUCCESS ;
}
#endif // P4MOLLWEIDE_MAIN
