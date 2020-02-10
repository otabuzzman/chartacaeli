
package org.chartacaeli;

import org.chartacaeli.caa.CAANutation;

@SuppressWarnings("serial")
public class CircleNorthernPolar extends CircleParallel {

	public CircleNorthernPolar( Converter converter, Projector projector ) {
		super( converter, projector ) ;
	}

	public org.chartacaeli.model.Angle getAngle() {
		org.chartacaeli.model.Angle r ;
		double e, o ;
		Epoch epoch ;

		epoch = (Epoch) Registry.retrieve( Epoch.class.getName() ) ;
		if ( epoch == null )
			e = new Epoch().alpha() ;
		else
			e = epoch.alpha() ;
		o = CAANutation.MeanObliquityOfEcliptic( e ) ;

		r = new org.chartacaeli.model.Angle() ;
		r.setRational( new org.chartacaeli.model.Rational() ) ;
		r.getRational().setValue( 90-o ) ;

		return r ;
	}
}