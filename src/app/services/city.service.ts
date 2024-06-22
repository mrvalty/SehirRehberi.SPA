import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { City } from '../models/city';
import { response } from 'express';
import { ApiCityResponse } from '../ApiCityResponse';
import { Photo } from '../models/Photo';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(
  private httpClient:HttpClient,
  private alertifyService:AlertifyService,
  private router : Router
) { }
path ="https://localhost:44328/api/cities";

getCities():Observable<City[]>{
  return this.httpClient.get<ApiCityResponse>(this.path).pipe(map(response => response.$values)
);
}

getCityById(cityId: number):Observable<City>{
  return this.httpClient.get<City>(this.path + "/detail/?id=" + cityId)
}

getPhotosByCity(cityId:number):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path + "/photos/?cityId=" + cityId)
}

add(city: City){
this.httpClient.post<City>(this.path + '/add' ,city).subscribe(data => {
  this.alertifyService.success("Şehir Ekleme İşlemi Başarılı.")
  this.router.navigateByUrl('/cityDetail/' + data["id"])

});
}
}
