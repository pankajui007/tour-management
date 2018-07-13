import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristListService } from '../tourist-list.service'; 
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.scss']
})
export class AddTouristComponent implements OnInit {
	title="Add Tourist";	
	tourists =  new Tourist( 0, '', '', '');	
	//tourists = {id: 0, first_name: '', last_name: '', email: '', gender: ''};
	constructor(private touristService: TouristListService,public messageService: MessageService, private router:Router) { }

	  ngOnInit() { 
	    
	  }
	submitted = false; 
	public saveTourist(tourists:Tourist): void {		
		this.touristService.addTourist(this.tourists).subscribe(tourists => {
			this.tourists = tourists;
			this.router.navigate(['/tourist-list']);
			/*console.log(this.tourists);
			if(tourists.valid === 1){				
				this.messageService.add('You have successfully Added');
				setTimeout (() => {
				  this.messageService.clear();
				}, 2000)
			}else{
				this.messageService.clear();					
			}*/
		});					
	} 
}
 