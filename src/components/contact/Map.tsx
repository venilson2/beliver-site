import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {

  const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  
  const center = {
    lat: -23.7851473,
    lng: -46.6859026,
  };
  
  const mapOptions = {
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#242f3e',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#242f3e',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#746855',
          },
        ],
      },
    ],
  };

    return (
      // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      //   <GoogleMap
      //     mapContainerStyle={containerStyle}
      //     center={center}
      //     zoom={15}
      //     options={mapOptions}
      //   ></GoogleMap>
      // </LoadScript>
      <div className="map-responsive">
        <iframe 
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9402376481758!2d-46.6862888244956!3d-23.78514236985202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce488e141403a9%3A0xd30a0a8cadcbe67f!2sRua%20Henrique%20Muzzio%2C%20396%20-%20Jardim%20Varginha%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004857-040!5e0!3m2!1spt-BR!2sbr!4v1687661675979!5m2!1spt-BR!2sbr" 
          style={{border:0}} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          >
        </iframe>
      </div>
    );
  };
  
export default Map;