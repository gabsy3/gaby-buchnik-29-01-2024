export interface Weather {
    Version: number
    Key: string
    Type: string
    Rank: number
    LocalizedName: string
    Country: Country
    AdministrativeArea: AdministrativeArea
  }
  
  export interface Country {
    ID: string
    LocalizedName: string
  }
  
  export interface AdministrativeArea {
    ID: string
    LocalizedName: string
  }

  export interface CurrentConditions{
    city:string;
    Temperature:string;
    WeatherText:string;
    WeatherIcon:string;
  }

  export interface fiveDay{
    minTemp:string;
    maxTemp:string;
    Date:string;
    WeatherIcon:string;
  }



  export interface wsState{
    id:string;
    city:string;
    temp:string;
    weatherText:string;
    img:string;
    favorites:fv[];
    forecast:fxw[];
  }

  export interface fv{
    id:string;
    city:string;
    temp:string;
    img:string;
  }

  export interface fxw{
    data:string;
    minTemp:string;
    maxTemp:string;
    img:string;
  }
 