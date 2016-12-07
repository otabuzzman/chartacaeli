#include "Math.h"
#include "AACoordinateTransformation.h"

double Math::sin( double a ) {
	return std::sin( CAACoordinateTransformation::DegreesToRadians( a ) ) ;
}

double Math::cos( double a ) {
	return std::cos( CAACoordinateTransformation::DegreesToRadians( a ) ) ;
}

double Math::tan( double a ) {
	return std::tan( CAACoordinateTransformation::DegreesToRadians( a ) ) ;
}

double Math::asin( double a ) {
	return CAACoordinateTransformation::RadiansToDegrees( std::asin( a ) ) ;
}

double Math::atan( double a ) {
	return CAACoordinateTransformation::RadiansToDegrees( std::atan( a ) ) ;
}

double Math::atan2( double y, double x ) {
	return CAACoordinateTransformation::RadiansToDegrees( std::atan2( y, x ) ) ;
}
