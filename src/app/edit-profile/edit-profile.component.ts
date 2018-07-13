import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TouristListService } from '../tourist-list.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
	user = new User();
	constructor( private userDetailService:TouristListService ,private router:Router ) { }

 	ngOnInit() {
		this.userDetailFunction();
	}
	userDetailFunction(): void{		
			this.userDetailService.userDetail().subscribe(user => {
				this.user = user[0];
			});		
		}
	editProfile(user):void {
		console.log('hi');
		//this.uploader.uploadAll();
		this.userDetailService.editProfile(this.user).subscribe( user=> {
			this.user = user;
			this.router.navigate(['/profile']);			
		});	
	}
}
