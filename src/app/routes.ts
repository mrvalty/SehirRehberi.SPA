import path from "path";
import { CityComponent } from "./city/city.component";
import { Routes } from "@angular/router";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { CityAddComponent } from "./city/city-add/city-add.component";
import { RegisterComponent } from "./register/register.component";

export const appRoutes : Routes = [
{path:"city",component:CityComponent},
{path:"cityAdd",component:CityAddComponent},
{path:"cityDetail/:cityId",component:CityDetailComponent}, //parametreli route tanımlanır
//bunların dışında birşey gelirse ** city e redirect yapılır.full ile tam olarak citye yapılmış olur.
{path:"**",redirectTo:"city",pathMatch:"full"}, // default açılır ekranda city ekranını getirir.
{path:"register",component:RegisterComponent}
];
