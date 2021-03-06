
package org.chartacaeli;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import com.vividsolutions.jts.geom.Coordinate;

import org.chartacaeli.caa.CAA2DCoordinate;
import org.chartacaeli.caa.CAACoordinateTransformation;
import org.chartacaeli.caa.CAANutation;

@SuppressWarnings("serial")
public class BodyPlanet extends BodyOrbitalType {

	// configuration key (CK_)
	private final static String CK_STRETCH			= "stretch" ;

	private final static double DEFAULT_STRETCH		= 0 ;

	private org.chartacaeli.model.BodyPlanet peer ;

	public BodyPlanet( org.chartacaeli.model.BodyPlanet peer, Converter converter, Projector projector ) {
		super( converter, projector ) ;

		this.peer = peer ;
	}

	public Coordinate jdToEquatorial( double jd, Coordinate eq ) {
		double l, b, o ;
		Class<?> c ;
		double epoch, stretch ;
		CAA2DCoordinate c2d ;
		Method eclipticLongitude ;
		Method eclipticLatitude ;

		l = 0 ;
		b = 0 ;

		epoch = getEpochAlpha() ;

		if ( getStretch() )
			stretch = Configuration.getValue( this, CK_STRETCH, DEFAULT_STRETCH ) ;
		else
			stretch = 0 ;

		try {
			c = Class.forName( "org.chartacaeli.caa.CAA"+peer.getType().substring( 0, 1 ).toUpperCase()+peer.getType().substring( 1 ) ) ;

			eclipticLongitude = c.getMethod( "EclipticLongitude", new Class[] { double.class, boolean.class } ) ;
			eclipticLatitude = c.getMethod( "EclipticLatitude", new Class[] { double.class, boolean.class } ) ;

			l = (Double) eclipticLongitude.invoke( null, new Object[] { new Double( jd ), new Boolean( false ) } ) ;
			b = (Double) eclipticLatitude.invoke( null, new Object[] { new Double( jd ), new Boolean( false ) } ) ;
		} catch ( ClassNotFoundException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( NoSuchMethodException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( InvocationTargetException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( IllegalAccessException e ) {
			throw new RuntimeException( e.toString() ) ;
		}

		if ( eq != null ) {
			o = CAANutation.MeanObliquityOfEcliptic( epoch ) ;
			c2d = CAACoordinateTransformation.Ecliptic2Equatorial( l, b, o ) ;
			eq.x = CAACoordinateTransformation.HoursToDegrees( c2d.X() ) ;
			eq.y = c2d.Y() ;
		}

		b += ( jd-epoch )*stretch ;
		o = CAANutation.MeanObliquityOfEcliptic( epoch ) ;
		c2d = CAACoordinateTransformation.Ecliptic2Equatorial( l, b, o ) ;

		return new Coordinate( CAACoordinateTransformation.HoursToDegrees( c2d.X() ), c2d.Y() ) ;
	}
}
