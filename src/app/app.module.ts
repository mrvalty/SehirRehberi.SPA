import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { UserListComponent } from './user-list/user-list.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';

import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [	
    AppComponent,
      NavComponent,
      CityComponent,
      UserListComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule
        ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
