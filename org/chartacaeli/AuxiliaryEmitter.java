
package org.chartacaeli;

public interface AuxiliaryEmitter extends PostscriptEmitter {
	public void headAUX() ;
	public void emitAUX() ;
	public void tailAUX() ;
}
