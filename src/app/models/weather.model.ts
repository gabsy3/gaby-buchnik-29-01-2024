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
  }