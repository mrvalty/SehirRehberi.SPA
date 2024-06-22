import { City } from "./models/city";

export interface ApiCityResponse {
  $id: string;
  $values: City[];
}
