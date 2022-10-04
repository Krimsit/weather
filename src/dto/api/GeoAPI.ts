import { axios } from '../../core';

import { GeoDetail, RequestData } from '../types/Geo';

const api = {
  getGeoByCoords: ({ lat, lon }: RequestData): Promise<GeoDetail> =>
    axios.get(`/geo/1.0/reverse?lat=${lat}&lon=${lon}`).then((res) => {
      const data = res.data[0];

      return {
        city: data.local_names.ru,
        lat: data.lat,
        lon: data.lon
      };
    })
};

export default api;
