import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'hbo-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css', '../mainpage.component.css']
})
export class AuthenticationComponent implements OnInit {
  public buttonClicked!:string;
  private authObservable!: Observable<AuthResponse>;
  public error: number;
  public errorMsg!: boolean;

  constructor(private authService: AuthService) { 
    this.error = -1;
  }

  ngOnInit(): void {
  }

  public onSubmit(data:NgForm){
    console.log("Button pressed = " + this.buttonClicked)
    console.log(data.value)
    if (this.buttonClicked == 'SignUp'){
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    } else if (this.buttonClicked == 'Login'){
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }

    this.authObservable.subscribe(
      (data: AuthResponse) =>{
      console.log(data)
    },
    error => {
      this.error = 1;
      console.log(error.error)
      this.errorMsg = error.error.error.message
      console.log(this.errorMsg)

    }
    );
    this.error = 0;
  }

  checkSuccess(buttonClicked: string){
    if ((buttonClicked == 'SignUp') && (this.error == 0))
      return 1;
    else if ((buttonClicked == 'Login') && (this.error == 0))
      return 2;
    else if ((this.error == 1) || (this.buttonClicked == ' ')){
      this.error = 0
      this.buttonClicked = ' ';
      return 3;
    }
    return 0;
  }

}
