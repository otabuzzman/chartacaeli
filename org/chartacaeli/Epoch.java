
package org.chartacaeli;

import java.util.Calendar;

import org.chartacaeli.caa.CAADate;

@SuppressWarnings("serial")
public class Epoch extends org.chartacaeli.model.Epoch {

	private double alpha = Double.NEGATIVE_INFINITY ;
	private double omega = Double.NEGATIVE_INFINITY ;

	public double alpha() {
		int y ;
		CAADate a ;

		if ( alpha>Double.NEGATIVE_INFINITY )
			return alpha ;

		if ( getCalendar() != null )
			return alpha = valueOf( getCalendar() ) ;
		if ( getJD() != null )
			return alpha = valueOf( getJD() ) ;

		y = Calendar.getInstance().get( Calendar.YEAR ) ;
		a = new CAADate( y, 1, 1, 12, 0, 0, true ) ;
		alpha = a.Julian() ;
		a.delete() ;

		setJD( new org.chartacaeli.model.JD() ) ;
		getJD().setValue( alpha ) ;

		return alpha ;
	}

	public double finis() {
		double alpha ;
		CAADate t, a ;

		if ( omega>Double.NEGATIVE_INFINITY )
			return omega ;

		if ( getFinis() != null ) {
			if ( getFinis().getCalendar() != null )
				return omega = valueOf( getFinis().getCalendar() ) ;
			return omega = valueOf( getFinis().getJD() ) ;
		}

		alpha = alpha() ;
		t = new CAADate( alpha, true ) ;
		a = new CAADate(
				t.Year()+1, t.Month(), t.Day(),
				t.Hour(), t.Minute(), t.Second(), true ) ;
		omega = a.Julian() ;
		t.delete() ;
		a.delete() ;

		return omega ;
	}
}