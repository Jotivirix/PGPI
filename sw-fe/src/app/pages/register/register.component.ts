import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  signupForm :FormGroup;

  constructor(private userService:UserService,private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      name: ['',Validators.required],
      surname: ['',Validators.required],
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['',Validators.required],
      phone_number: ['',Validators.required],
      street: ['',Validators.required],
      zip_code: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required]
    })
  }
  ngOnInit(): void { 
  }

  enviar(values:any){
    
 
    this.userService.register(values).subscribe(
      (res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      }
    );
  }
 
}
