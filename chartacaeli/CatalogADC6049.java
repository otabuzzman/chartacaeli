
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
import java.util.Hashtable;
import java.util.zip.GZIPInputStream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.exolab.castor.xml.ValidationException;

import com.vividsolutions.jts.geom.Coordinate;

import caa.CAA2DCoordinate;
import caa.CAACoordinateTransformation;
import caa.CAAPrecession;

@SuppressWarnings("serial")
public class CatalogADC6049 extends chartacaeli.model.CatalogADC6049 implements PostscriptEmitter {

	private final static int C_CHUNK18 = 25+1/*0x0a*/ ;
	private final static int C_CHUNK20 = 29+1/*0x0a*/ ;

	private final static Log log = LogFactory.getLog( CatalogADC6049.class ) ;

	private Hashtable<String, CatalogADC6049Record> catalog ;

	private Converter converter ;
	private Projector projector ;

	private String _m = new String() ;
	private int _ch = 0 ;
	private int _ca = 0 ;
	private int _co = 0 ;

	public CatalogADC6049( Converter converter, Projector projector ) {
		this.converter = converter ;
		this.projector = projector ;
	}

	@SuppressWarnings("unchecked")
	private Hashtable<String, CatalogADC6049Record> unsafecast( Object hashtable ) {
		return (Hashtable<String, CatalogADC6049Record>) hashtable ;
	}

	public void addAllCatalogRecord() {
		Reader reader ;
		CatalogADC6049Record record ;
		String key ;

		key = getClass().getSimpleName()+":"+getName() ;
		catalog = unsafecast( Registry.retrieve( key ) ) ;
		if ( catalog == null ) {
			catalog = new Hashtable<String, CatalogADC6049Record>() ;
			Registry.register( key, catalog ) ;
		} else
			return ;

		try {
			reader = reader() ;

			while ( ( record = record( reader ) ) != null ) {
				try {
					record.inspect() ;
				} catch ( ParameterNotValidException e ) {
					log.warn( ParameterNotValidError.errmsg( record.con, e.getMessage() ) ) ;

					continue ;
				}

				record.register() ;

				for ( chartacaeli.model.CatalogADC6049Record select : getCatalogADC6049Record() ) {
					select.copyValues( record ) ;
					if ( Boolean.parseBoolean( record.getSelect() ) ) {
						catalog.put( record.con, record ) ;

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
		chartacaeli.model.Body body ;
		BodyAreal bodyAreal ;
		chartacaeli.model.Position pm ;
		CAA2DCoordinate ceq ;
		double e ;
		Epoch epoch ;

		epoch = (Epoch) Registry.retrieve( Epoch.class.getName() ) ;

		if ( epoch == null )
			e = new Epoch().alpha() ;
		else
			e = epoch.alpha() ;

		for ( CatalogADC6049Record record : catalog.values() ) {
			record.register() ;

			body = new chartacaeli.model.Body() ;
			body.setBodyAreal( new chartacaeli.model.BodyAreal() ) ;
			body.getBodyAreal().setName( record.con ) ;
			body.getBodyAreal().initValues() ;

			body.getBodyAreal().setAnnotation( record.getAnnotation() ) ;

			body.getBodyAreal().setBodyArealTypeChoice( new chartacaeli.model.BodyArealTypeChoice() ) ;

			for ( Coordinate eq : record.list().getCoordinates() ) {
				ceq = CAAPrecession.PrecessEquatorial( eq.x, eq.y, 2451545./*J2000*/, e ) ;
				pm = new chartacaeli.model.Position() ;
				// chartacaeli.model.AngleType
				pm.setLon( new chartacaeli.model.Lon() ) ;
				pm.getLon().setRational( new chartacaeli.model.Rational() ) ;
				pm.getLon().getRational().setValue( CAACoordinateTransformation.HoursToDegrees( ceq.X() ) ) ;  
				// chartacaeli.model.AngleType
				pm.setLat( new chartacaeli.model.Lat() ) ;
				pm.getLat().setRational( new chartacaeli.model.Rational() ) ;
				pm.getLat().getRational().setValue( ceq.Y() ) ;  

				body.getBodyAreal().getBodyArealTypeChoice().addPosition( pm ) ;
				ceq.delete() ;
			}

			try {
				body.validate() ;
			} catch ( ValidationException ee ) {
				throw new RuntimeException( ee.toString() ) ;
			}

			bodyAreal = new BodyAreal( converter, projector ) ;
			body.getBodyAreal().copyValues( bodyAreal ) ;

			bodyAreal.register() ;
			ps.op( "gsave" ) ;

			bodyAreal.headPS( ps ) ;
			bodyAreal.emitPS( ps ) ;
			bodyAreal.tailPS( ps ) ;

			ps.op( "grestore" ) ;
			bodyAreal.degister() ;

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

	public CatalogADC6049Record record( java.io.Reader catalog ) {
		CatalogADC6049Record r = null ;
		char[] cl ;
		int cn ;
		String rl, rb ;
		String rc, mc ;

		try {
			if ( _m.length()==0 ) {
				cl = new char[C_CHUNK18] ;
				cn = catalog.read( cl, 0, C_CHUNK18 ) ;
				if ( cn == -1 )
					return r ;

				if ( cl[C_CHUNK18-1] == '\n' ) {
					rb = new String( cl ) ;

					_ch = C_CHUNK18 ;
					_ca = 20 ;
					_co = 24 ;
				} else {
					rb = new String( cl ) ;
					cl = new char[C_CHUNK20-C_CHUNK18] ;
					cn = catalog.read( cl, 0, C_CHUNK20-C_CHUNK18 ) ;
					rb = rb+new String( cl ) ;

					_ch = C_CHUNK20 ;
					_ca = 23 ;
					_co = 27 ;
				}

				_m = new String( rb ) ;
			} else {
				rb = new String( _m ) ;
			}

			cl = new char[_ch] ;

			while ( ( cn = catalog.read( cl, 0, _ch ) )>-1 ) {
				rl = new String( cl ) ;

				rc = rl.substring( _ca, _co ).trim() ;
				mc = _m.substring( _ca, _co ).trim() ;
				if ( rc.equals( mc ) ) {
					rb = rb+rl ;

					continue ;
				} else {
					_m = rl ;

					if ( ( r = record( rb ) ) != null )
						break ;

					rb = rl ;
				}
			}
			if ( cn == -1 ){
				r = record( rb ) ;

				_m = new String() ;
			}
		} catch ( IOException e ) {
			throw new RuntimeException( e.toString() ) ;
		}

		return r ;
	}

	private CatalogADC6049Record record( String record ) {
		CatalogADC6049Record r = null ;

		try {
			r = new CatalogADC6049Record( record ) ;
		} catch ( ParameterNotValidException e ) {
			log.warn( ParameterNotValidError.errmsg( '"'+record+'"', e.getMessage() ) ) ;
		}

		return r ;
	}
}
