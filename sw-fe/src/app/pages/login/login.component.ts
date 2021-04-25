import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm :FormGroup;
  constructor(private userService:UserService,private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  enviar(values:any){
    
    console.log(values);
    this.userService.login(values).subscribe(
      (res)=>{
        console.log(res)
        localStorage.setItem('token',res['token']);
    },(err)=>{
      console.log(err)
    }
    );
  }
 

}
