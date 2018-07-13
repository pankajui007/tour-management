import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	user = new User('','','');
	constructor(private auth: AuthService, private router: Router) { }

	ngOnInit() { }
	regUser(user:User):void{		
		this.auth.register(this.user).subscribe(user => {
		this.user = user;
			console.log(user);
			this.router.navigate(['/']);
		});
	};

}
