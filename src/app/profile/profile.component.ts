import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TouristListService } from '../tourist-list.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	user = new User();	

	constructor( private userDetailService:TouristListService ) { }

	ngOnInit() {
		this.userDetailFunction();
	}
	userDetailFunction(): void{		
			this.userDetailService.userDetail().subscribe(user => {
				this.user = user[0];
			});		
		}
}
