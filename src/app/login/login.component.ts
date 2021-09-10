import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

 constructor() {
this.loginForm =new FormGroup({
username: new FormControl('', [
Validators.required,
Validators.minLength(6),
Validators.maxLength(10),
Validators.pattern(/^[a-z0-9]+$/i)
]),
password: new FormControl('', [
Validators.required,
Validators.minLength(6),
Validators.maxLength(10),
Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/)
]),
});
}

 ngOnInit(): void {
console.log("login");
}
handleLogin() {

}
get username() {
return this.loginForm.controls['username'];
}
get password() {
return this.loginForm.controls['password'];
}
}