import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'first-angular-app';
  sampleVariable: string = 'test';
  imgURL: string = 'https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = 'Apple';
  username: string = 'John Doe';
  username2: string = 'usernameTest';
  isLoggedIn: boolean = false;
  userNameExample: string = 'John Doe';

  buttonClick() {
    console.log('button click');
  }

  keyEnter(event:any) {
    console.log(event.keyCode)
    if(event.keyCode == 13) {
      console.log('enter key pressed')
    }
  }

  keyEnter2(user: HTMLInputElement) {
    console.log(user.id);
  }

  updateUserName(username: HTMLInputElement) {
    this.username = username.value;
    console.log(this.username);
  }

  // updateUserName2(username2: HTMLInputElement) {
  //   this.username2 = username2.value;
  //   console.log(this.username2);
  // }

  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true; 
  
  loginCount: number = 0;
  userRole: string = "Member";

  users: Array<string> = ['John', 'Sam', 'Smith', 'Raj'];
  userObj: Array<any> = [
    {id: 1, name: 'John1', email: 'john@gmail.com'},
    {id: 2, name: 'Smith1', email: 'smith@gmail.com'},
    {id: 3, name: 'Sam1', email: 'sam@gmail.com'},
    {id: 4, name: 'raj1', email: 'raj@gmail.com'},
  ];

  countLoginAttempts() {
    this.loginCount++;
    console.log(this.loginCount)
  }

  addNewUser() {
    let user = {id:5, name: 'User 1', email: 'user1@gmail.com'};
    this.userObj.push(user);
  }

  // onDelete(user:object) {
  //   let index = this.userObj.indexOf(user);
  //   this.userObj.splice(index, 1)

  // }
  onDelete(index:number) {
    this.userObj.splice(index, 1)

  }

}



