import { useQuery, UseQueryResult } from 'react-query';

import geoApi from '../api/GeoAPI';

import { GeoDetail, HookProps } from '../types/Geo';

export const useGeoInformation = ({ data, enabled }: HookProps): UseQueryResult<GeoDetail> =>
  useQuery<GeoDetail>('geo_information', () => geoApi.getGeoByCoords(data), {
    enabled: enabled
  });
