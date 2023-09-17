export interface TPosition {
  latitude: number | string;
  longitude: number | string;
  time: number | string;
  event?: object;
}

export type TRoute = TPosition[];
