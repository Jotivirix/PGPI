import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  signupForm :FormGroup;
  loading:boolean = false;
  errorRes:string = '';
  error:boolean = false;
  constructor(private userService:UserService,private _builder: FormBuilder,private router:Router) {
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
    this.loading = true;
    this.userService.register(values).subscribe(
      (res)=>{
        if(res.code === 200){
          alert('Registrado satisfactoriamente');
          this.router.navigate(['/login']);
          console.log(res);
        }else{
          alert(res.message);
          this.errorRes = res.message;
          this.loading = false;
          this.error = true;
        }
      },(err)=>{
        console.log(err);
      }
    );
  }

}
