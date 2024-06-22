import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/loginUser';
import { LoginResponse } from '../../Response/LoginResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private httpClient:HttpClient,
  private router : Router,
  private alertifyService : AlertifyService
) { }

path ="https://localhost:44328/api/auth/";
userToken:any;
decodedToken:any;
jwtHelper:JwtHelperService = new JwtHelperService();
TOKEN_KEY = "token";

login(loginuser:LoginUser){

  let headers = new HttpHeaders();

  headers= headers.append("Content-Type","application/json");
  this.httpClient.post(this.path +"login",loginuser,{headers:headers}).subscribe(data =>{
     this.saveToken(data.toString())
     this.userToken = data;
     this.decodedToken = this.jwtHelper.decodeToken(data.toString());
     this.alertifyService.success("Sisteme Giriş Yapıldı");
     this.router.navigateByUrl('/city');

  });

}

register(registerUser:RegisterUser){

  let headers = new HttpHeaders();

  headers= headers.append("Content-Type","application/json");
  this.httpClient
  .post(this.path +"register",registerUser,{headers:headers})
  .subscribe(data =>{


  });
}

saveToken(token: string){
  localStorage.setItem(this.TOKEN_KEY,token)
}

logOut(){
  localStorage.removeItem(this.TOKEN_KEY);
  this.alertifyService.success("Sistemden Çıkış Yapıldı");
}
loggedIn(){
  return this.jwtHelper.isTokenExpired(this.TOKEN_KEY);
}

getCurrentUserId(){
  const tokenstr = localStorage.getItem(this.TOKEN_KEY)
  if(tokenstr){
    return this.jwtHelper.decodeToken(tokenstr).nameid
  }
  return null;

}
}
