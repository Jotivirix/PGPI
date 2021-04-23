import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  User:any = [];
  signupForm :FormGroup;
  constructor(private userService:UserService,private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      Nombre: ['',Validators.required],
      Apellidos: ['',Validators.required],
      Email: ['',Validators.compose([Validators.email, Validators.required])],
      Password: ['',Validators.required],
      Telefono: ['',Validators.required],
      Direccion: ['',Validators.required],
      CP: ['',Validators.required],
      Ciudad: ['',Validators.required],
      Pais: ['',Validators.required]
    })
  }
  ngOnInit(): void { 
  }

  enviar(values:any){
    
    console.log(values);
    this.userService.register(values);
  }
 
}
