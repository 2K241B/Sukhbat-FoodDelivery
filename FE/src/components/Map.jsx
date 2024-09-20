'use-client';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useEffect, useState } from 'react';

const Map = () => {
  const [geoData, setGeoData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setGeoData({ lat: latitude, lng: longitude });
    });
  }, []);
  console.log(geoData);
  return (
    geoData && (
      <>
        <MapContainer
          center={geoData && [geoData?.lat, geoData?.lng]}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=6x4bjJJpQrYpFrpEGg0H"
          />
          {geoData && <Marker position={[geoData.lat, geoData.lng]} />}
        </MapContainer>
      </>
    )
  );
};
export default Map;
