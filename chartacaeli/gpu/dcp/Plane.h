#ifndef __PLANE_H__
#define __PLANE_H__

#include "Vector3D.h"

class Plane {

public:
	__device__ Plane( Vector3D& p1, Vector3D& p2, Vector3D& p3 ) ;
	__device__ ~Plane() ;

	__device__ Vector3D* intersection( Vector3D& l1, Vector3D& l2 ) ;
	// CXXWRAP/ JUnit
	Plane( double p1[3], double p2[3], double p3[3] ) ;

	void intersection( /* arg(s) */ double l1[3], double l2[3], /* return */ double x[3] ) ;

private:
	Vector3D* p1 ;
	Vector3D* p2 ;
	Vector3D* p3 ;
	Vector3D* normal ;

	__device__ void set( Vector3D& p1, Vector3D& p2, Vector3D& p3 ) ;
} ;
#endif // __PLANE_H__
