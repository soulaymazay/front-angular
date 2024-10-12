import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule], // Ajouter CommonModule ici
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = "ahmed";
  password: string = "Ahmed123";
  status: string = "activé";
  tableData: any[] = [];
  message: string = "";
  public userList: any[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getStatus(): string {
    return this.status;
  }

  getMessage(): void {
    console.log("my new message");
  }

  getUser(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.userList = result;
      },
      error => {
        console.error("Error fetching users:", error);
      }
    );
  }
  
}


