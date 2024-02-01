export interface location {
  LocalizedName: string;
}

export interface wsState {
  id: string;
  city: string;
  temp: string;
  weatherText: string;
  img: string;
  favorites: fv[];
  favorite:boolean;
  forecast: fcw[];
}

export interface fv {
  id: string;
  city: string;
  temp: string;
  img: string;
}

export interface fcw {
  date: string;
  minTemp: string;
  maxTemp: string;
  img: string;
}
