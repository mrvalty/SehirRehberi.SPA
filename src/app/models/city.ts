import { Photo } from "./Photo";

export class City {
  id!: number;
  name!: string;
  description!: string;
  userId!: number;
  photoUrl!: string;
  photos!: Photo[];
}
