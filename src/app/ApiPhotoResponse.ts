import { Photo } from "./models/Photo";

export interface ApiPhotoResponse {
  $id: string;
  $values: Photo[];

}
