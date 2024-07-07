import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf],
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

}
