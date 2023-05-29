import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { config } from 'dotenv';

config();

const GoogleMaps = () => {

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
      <LoadScript googleMapsApiKey={""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={mapOptions}
        ></GoogleMap>
      </LoadScript>
    );
  };
  
  export default GoogleMaps;