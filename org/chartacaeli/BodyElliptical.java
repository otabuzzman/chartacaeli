
package org.chartacaeli;

import com.vividsolutions.jts.geom.Coordinate;

@SuppressWarnings("serial")
public class BodyElliptical extends BodyOrbitalType {

	public BodyElliptical( org.chartacaeli.model.BodyElliptical peer, Converter converter, Projector projector ) {
		super( converter, projector ) ;
	}

	public void headPS( ApplicationPostscriptStream ps ) {
		// TODO Auto-generated method stub
	}

	public void emitPS( ApplicationPostscriptStream ps ) {
		// TODO Auto-generated method stub
	}

	public void tailPS( ApplicationPostscriptStream ps ) {
		// TODO Auto-generated method stub
	}

	public double valOfScaleMarkN( int mark, double span ) {
		// TODO Auto-generated method stub
		return 0;
	}

	public Coordinate[] list( double begin, double end ) {
		// TODO Auto-generated method stub
		return null;
	}

	public Coordinate jdToEquatorial( double jd, Coordinate eq ) {
		// TODO Auto-generated method stub
		return null;
	}
}