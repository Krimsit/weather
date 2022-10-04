export interface RequestData {
    lat: number
    lon: number
}

export interface HookProps {
  data: RequestData;
  enabled: boolean;
}