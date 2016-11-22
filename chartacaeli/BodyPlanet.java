
package chartacaeli;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import com.vividsolutions.jts.geom.Coordinate;

import chartacaeli.caa.CAA2DCoordinate;
import chartacaeli.caa.CAACoordinateTransformation;
import chartacaeli.caa.CAANutation;

@SuppressWarnings("serial")
public class BodyPlanet extends BodyOrbitalType {

	// configuration key (CK_)
	private final static String CK_STRETCH			= "stretch" ;

	private final static double DEFAULT_STRETCH		= 0 ;

	private chartacaeli.model.BodyPlanet peer ;	

	public BodyPlanet( chartacaeli.model.BodyPlanet peer, Converter converter, Projector projector ) {
		super( converter, projector ) ;

		this.peer = peer ;
	}

	public Coordinate jdToEquatorial( double jd ) {
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
			c = Class.forName( "chartacaeli.caa.CAA"+peer.getType().substring( 0, 1 ).toUpperCase()+peer.getType().substring( 1 ) ) ;

			eclipticLongitude = c.getMethod( "EclipticLongitude", new Class[] { double.class } ) ;
			eclipticLatitude = c.getMethod( "EclipticLatitude", new Class[] { double.class } ) ;

			l = (Double) eclipticLongitude.invoke( null, new Object[] { new Double( jd ) } ) ;
			b = (Double) eclipticLatitude.invoke( null, new Object[] { new Double( jd ) } )
			+( jd-epoch )*stretch ;
		} catch ( ClassNotFoundException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( NoSuchMethodException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( InvocationTargetException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( IllegalAccessException e ) {
			throw new RuntimeException( e.toString() ) ;
		}

		o = CAANutation.MeanObliquityOfEcliptic( epoch ) ;
		c2d = CAACoordinateTransformation.Ecliptic2Equatorial( l, b, o ) ;

		return new Coordinate( CAACoordinateTransformation.HoursToDegrees( c2d.X() ), c2d.Y() ) ;
	}
}
