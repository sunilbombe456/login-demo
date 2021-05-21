import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  ngOnInit(): void {
  }

  constructor(private userService:UserService) { }

   
   registerForm = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    userName : new FormControl(''),
  });

  onSubmit(){

    console.log(this.registerForm.value);
    // this.userService.signUp(this.registerForm.value)
    // .subscribe((res) => alert('Sign Up'));
  }


}
