import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristListService } from '../tourist-list.service'; 

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
	providers: [ TouristListService ],
  styleUrls: ['./tourist.component.scss']
})
export class TouristComponent implements OnInit {
	title = 'Tourist List';
	constructor(private touristService: TouristListService) { }
  
	tourists: Tourist[];	

	ngOnInit() {
		this.touristList();
		
	}

	touristList(): void {
	  this.touristService.touristList()
		  .subscribe(tourists => this.tourists = tourists);
	}
	
	deleteTourist(tourists): void {
		if(confirm('Are you sure?')){
			this.touristService.deleteTourist(tourists.id).subscribe();
			this.touristList();
		}		
	  }
}
