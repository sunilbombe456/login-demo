import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }


  ngOnInit(): void {
  }

   loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });

  onSubmit(){

    console.log(this.loginForm.value)

  }

}
