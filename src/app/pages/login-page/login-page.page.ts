import { Component, OnInit } from '@angular/core';
import {LoginFirebaseService} from '../../services/login-firebase.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
    public authService: LoginFirebaseService
  ) { }

  ngOnInit() {}
  signUp(email, password){
    this.authService.signUp(email.value, password.value).then((res) => {
      console.log(200);
    }).catch(console.log);
  }

}
