import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap.js';

const mapRef = {};
const city = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
  },
  name: 'Amsterdam',
}

describe('Hook: useMap', () => {
  it('should return object map', () => {
    const {result} = renderHook(() => useMap(mapRef, city));

    expect(result).toBeInstanceOf(Object);
  })
})
