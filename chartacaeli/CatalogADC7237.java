
package chartacaeli;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Hashtable;
import java.util.List;
import java.util.zip.GZIPInputStream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.exolab.castor.xml.ValidationException;

import com.vividsolutions.jts.geom.Coordinate;

import chartacaeli.caa.CAACoordinateTransformation;

@SuppressWarnings("serial")
public class CatalogADC7237 extends chartacaeli.model.CatalogADC7237 implements PostscriptEmitter {

	// configuration key (CK_)
	private final static String CK_THRESHOLDSCALE		= "thresholdscale" ;

	private final static double DEFAULT_THRESHOLDSCALE	= 5.2 ;

	private final static int C_CHUNK = 520+1/*0x0a*/ ;

	private final static Log log = LogFactory.getLog( CatalogADC7237.class ) ;

	private Hashtable<String, CatalogADC7237Record> catalog ;

	private Converter converter ;
	private Projector projector ;

	public CatalogADC7237( Converter converter, Projector projector ) {
		this.converter = converter ;
		this.projector = projector ;
	}

	@SuppressWarnings("unchecked")
	private Hashtable<String, CatalogADC7237Record> unsafecast( Object hashtable ) {
		return (Hashtable<String, CatalogADC7237Record>) hashtable ;
	}

	public void addAllCatalogRecord() {
		Reader reader ;
		CatalogADC7237Record record ;
		String key ;

		key = getClass().getSimpleName()+":"+getName() ;
		catalog = unsafecast( Registry.retrieve( key ) ) ;
		if ( catalog == null ) {
			catalog = new Hashtable<String, CatalogADC7237Record>() ;
			Registry.register( key, catalog ) ;
		} else
			return ;

		try {
			reader = reader() ;

			while ( ( record = record( reader ) ) != null ) {
				try {
					record.inspect() ;
				} catch ( ParameterNotValidException e ) {
					log.warn( ParameterNotValidError.errmsg( record.PGC, e.getMessage() ) ) ;

					continue ;
				}

				record.register() ;

				for ( chartacaeli.model.CatalogADC7237Record select : getCatalogADC7237Record() ) {
					select.copyValues( record ) ;
					if ( Boolean.parseBoolean( record.getSelect() ) ) {
						catalog.put( record.PGC, record ) ;

						break ;
					}
				}

				record.degister() ;
			}

			reader.close() ;
		} catch ( URISyntaxException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( MalformedURLException e ) {
			throw new RuntimeException( e.toString() ) ;
		} catch ( IOException e ) {
			throw new RuntimeException( e.toString() ) ;
		}
	}

	public void delAllCatalogRecord() {
		catalog.clear() ;
	}

	public CatalogRecord[] getCatalogRecord() {
		return catalog.values().toArray( new CatalogRecord[0] ) ;
	}

	public void headPS( ApplicationPostscriptStream ps ) {
	}

	public void emitPS( ApplicationPostscriptStream ps ) {
		double threshold, d, s ;
		double d25, r25, pa ;
		Coordinate p, a ;
		Vector vp, va ;
		List<CatalogADC7237Record> catalog ;
		Comparator<CatalogADC7237Record> comparator = new Comparator<CatalogADC7237Record>() {
			public int compare( CatalogADC7237Record a, CatalogADC7237Record b ) {
				double alogD25, blogD25 ;

				alogD25 = Double.valueOf( a.logD25 ).doubleValue() ;
				blogD25 = Double.valueOf( b.logD25 ).doubleValue() ;

				return alogD25>blogD25?-1:
					alogD25<blogD25?1:
						0 ;
			}
		} ;
		BodyStellar star ;
		BodyAreal area ;
		chartacaeli.model.ShapeElliptical shapeElliptical ;
		chartacaeli.model.Position position ;
		double ra, de ;

		threshold = Configuration.getValue( this, CK_THRESHOLDSCALE, DEFAULT_THRESHOLDSCALE ) ;

		catalog = Arrays.asList( this.catalog
				.values()
				.toArray( new CatalogADC7237Record[0] ) ) ;
		Collections.sort( catalog, comparator ) ;

		for ( CatalogADC7237Record record : catalog ) {
			ra = CAACoordinateTransformation.HoursToDegrees( record.RA() ) ;
			de = record.de() ;

			record.register() ;

			position = new chartacaeli.model.Position() ;
			// chartacaeli.model.AngleType
			position.setLongitude( new chartacaeli.model.Longitude() ) ;
			position.getLongitude().setRational( new chartacaeli.model.Rational() ) ;
			position.getLongitude().getRational().setValue( ra ) ;  
			// chartacaeli.model.AngleType
			position.setLatitude( new chartacaeli.model.Latitude() ) ;
			position.getLatitude().setRational( new chartacaeli.model.Rational() ) ;
			position.getLatitude().getRational().setValue( de ) ;  

			d = 0 ;
			s = 0 ;
			d25 = Double.valueOf( record.logD25 ) ;
			if ( d25<9.99 ) {
				d = java.lang.Math.pow( 10, d25 )*.1/60. ;
				p = projector.project( converter.convert( new Coordinate( ra, de ), false ) , false ) ;
				vp = new Vector( p ) ;
				a = projector.project( converter.convert( new Coordinate( ra+d, de ), false ), false ) ;
				va = new Vector( a ) ;
				s = va.sub( vp ).abs() ;
			}

			try {
				ps.op( "gsave" ) ;

				if ( s>threshold ) {
					area = new BodyAreal( converter, projector ) ;
					area.setName( record.PGC ) ;

					area.setAnnotation( record.getAnnotation() ) ;

					area.setBodyArealTypeChoice( new chartacaeli.model.BodyArealTypeChoice() ) ;
					shapeElliptical = new chartacaeli.model.ShapeElliptical() ;
					area.getBodyArealTypeChoice().setShapeElliptical( shapeElliptical ) ;

					r25 = Double.valueOf( record.logR25 ) ;
					shapeElliptical.setProportion( r25<9.99?1/java.lang.Math.pow( 10, r25 ):1 ) ;
					pa = Double.valueOf( record.PA ) ;
					shapeElliptical.setPA( pa<999?pa:0 ) ;
					shapeElliptical.setRational( new chartacaeli.model.Rational() ) ;
					shapeElliptical.getRational().setValue( d ) ;
					shapeElliptical.setPosition( position ) ;

					area.validate() ;

					ps.script( Configuration.getValue( this, record.OType, "" ) ) ;

					area.headPS( ps ) ;
					area.emitPS( ps ) ;
					area.tailPS( ps ) ;
				} else {
					star = new BodyStellar( converter, projector ) ;
					star.setName( record.PGC ) ;
					star.initValues() ;

					star.setScript( record.getScript() ) ;
					star.setAnnotation( record.getAnnotation() ) ;

					star.setPosition( position ) ;

					star.validate() ;

					star.headPS( ps ) ;
					star.emitPS( ps ) ;
					star.tailPS( ps ) ;
				}

				ps.op( "grestore" ) ;
			} catch ( ValidationException e ) {
				throw new RuntimeException( e.toString() ) ;
			}

			record.degister() ;
		}
	}

	public void tailPS( ApplicationPostscriptStream ps ) {
	}

	public Reader reader() throws URISyntaxException, MalformedURLException {
		URI uri ;
		URL url ;
		File file ;
		InputStream in ;
		GZIPInputStream gz ;

		uri = new URI( getUrl() ) ;
		if ( uri.isAbsolute() ) {
			url = uri.toURL() ;	
		} else {
			file = new File( uri.getPath() ) ;
			url = file.toURI().toURL() ;
		}

		try {
			in = url.openStream() ;

			gz = new GZIPInputStream( in ) ;
			return new InputStreamReader( gz ) ;
		} catch ( IOException egz ) {
			try {
				in = url.openStream() ;

				return new InputStreamReader( in ) ;
			} catch ( IOException ein ) {
				throw new RuntimeException ( egz.toString() ) ;
			}
		}
	}

	public CatalogADC7237Record record( java.io.Reader catalog ) {
		CatalogADC7237Record r = null ;
		char[] cl ;
		int o ;
		String rl ;

		cl = new char[C_CHUNK] ;
		o = 0 ;

		try {
			while ( catalog.read( cl, o++, 1 ) == 1 ) {
				if ( cl[o-1] == '\n' ) {
					if ( o<C_CHUNK ) {
						for ( o-- ; o<C_CHUNK ; o++ ) {
							cl[o] = ' ' ;
						}
						cl[o-1] = '\n' ;
					}
					rl = new String( cl ) ;
					o = 0 ;
					if ( ( r = record( rl ) ) != null )
						break ;
				}
			}
		} catch ( IOException e ) {
			throw new RuntimeException( e.toString() ) ;
		}

		return r ;
	}

	private CatalogADC7237Record record( String record ) {
		CatalogADC7237Record r = null ;

		try {
			r = new CatalogADC7237Record( record ) ;
		} catch ( ParameterNotValidException e ) {
			log.warn( ParameterNotValidError.errmsg( '"'+record+'"', e.getMessage() ) ) ;
		}

		return r ;
	}
}
