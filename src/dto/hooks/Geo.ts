import { useQuery, UseQueryResult } from "react-query"

import geoApi from "../api/GeoAPI"

import {GeoDetail, RequestData} from '../types/Geo';

interface Props {
   data: RequestData,
   enabled: boolean
}

export const useGeoInformation = ({ data, enabled }: Props): UseQueryResult<GeoDetail> => useQuery<GeoDetail>("geo_information", () => geoApi.getGeoByCoords(data), {
    enabled: enabled
})