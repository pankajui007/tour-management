import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user = new User('','');
	loginTrue:boolean = false;
	forgotPass:boolean = false;
	confirmPwd:boolean = false;
	error: string = '';
	constructor(private auth: AuthService, private router: Router) {}
	ngOnInit(): void {}
	
	loginUser(user:User):void{		
		this.auth.login(this.user).subscribe((user:any) => {
			this.user = user;	
			if(user.valid === 1){			
				localStorage.setItem('userToken',user.access_token);
				localStorage.setItem('userId',user.user_id);
				this.loginTrue = true;
				this.error='Redirecting to Dashboard!'
				this.router.navigate(['/']);
			}else{				
				this.loginTrue = false;
				this.error='Detail Does not match!'
			}					
		},
		(err : HttpErrorResponse)=>{
		  this.loginTrue = false;
		});
	};
	forgotpassForm(user:User):void{		
		this.auth.forgotpassUpdate(this.user).subscribe(user => {
		this.user = user;
		if(user.valid === 1){
				this.forgotPass = true;
				this.error='Your Password is Updated';
				location.reload();				
			}else{
				this.forgotPass = false;
				this.error='Email did not match!!';
			}	
		});		
	}
	//Login and Forgot Password Toggle
	showconfPwd(){
		this.confirmPwd = !this.confirmPwd;  	
	}
		

}
