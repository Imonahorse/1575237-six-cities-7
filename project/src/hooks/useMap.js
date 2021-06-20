import {useState, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CITIES} from '../const.js';

const ZOOM = 12;
const Layer = {
  URL: 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}',
  COPYRIGHT: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  APIKEY: 'b42a4fe28722439084924941798385fc',
};

function useMap(mapRef, cityState) {
  const location = CITIES[cityState];
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.setView({lat: location.latitude, lng: location.longitude}, ZOOM);
    }
  }, [map, location]);


  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: ZOOM,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(Layer.URL, {attribution: Layer.COPYRIGHT, apikey: Layer.APIKEY})
        .addTo(instance);

      setMap(instance);
    }

  }, [mapRef, map, location, cityState]);

  return map;
}

export default useMap;
