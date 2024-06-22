import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading = true;  // Yüklenme durumu için değişken
  constructor(private userService:UserService) { }

  ngOnInit() : void{

    this.userService.getUsers().subscribe(
      data =>{
      this.users = data;
      this.isLoading = false;  // Veri yüklendiğinde yüklenme durumunu güncelle
    },
  error => {
    console.error('Error loading users', error);
        this.isLoading = false;  // Hata durumunda yüklenme durumunu güncelle
  });
  }

}
