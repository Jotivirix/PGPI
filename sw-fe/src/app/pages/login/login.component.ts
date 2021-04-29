import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm :FormGroup;
  valueToken: any;
  loading:boolean = false;
  error:boolean = false;
  errorRes:string= '';
  constructor(private userService:UserService,private _builder: FormBuilder,private router:Router) {
    this.signupForm = this._builder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

  enviar(values:any){
    
    console.log(JSON.stringify(values));
    this.loading = true;
    this.userService.login(values).subscribe(
      (res)=>{
        if(res.status == "success"){
        console.log(res)
        this.valueToken = JSON.stringify(values).substring(0,JSON.stringify(values).length - 1 ) + ', "token": "' + res['token'] + '"}';
        console.log(this.valueToken);
        console.log(JSON.parse(this.valueToken));
        localStorage.setItem('token',res['token']);
        this.userService.getUsuario(JSON.parse(this.valueToken)).subscribe(
          (res) => {
          
          console.log(res)
          this.userService.editUser(res);
          console.log(this.userService.userCreate);
          if(this.userService.userCreate.value.role == "customer"){
            this.router.navigate(['']);
          }else{
            console.log(res)
            this.router.navigate(['pickingOrders'])
          }
          },(err)=>{
            console.log(err)
          }
        )
      }else{
        console.log(res)
        this.errorRes = res.message;
        this.error = true;
        this.loading = false;
      }
    },(err)=>{
      console.log(err)
    }
    );
  }
 

}
