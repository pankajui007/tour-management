import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tourist } from '../tourist';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json',
'Authorization': 'my-auth-token'
})
};
@Component({
  selector: 'app-update-tourist',
  templateUrl: './update-tourist.component.html',
  styleUrls: ['./update-tourist.component.scss']
})
export class UpdateTouristComponent implements OnInit {
	getUserId = localStorage.getItem('userId'); 
	title = 'Update Tourist Detail';
	touristListUrl:string= `/api/get_data.php?action=get_hero&userId=${this.getUserId}`;
	id: number;
	data:object={};
	touristObj:object={};
	tourists:any = []; 
	private sub: any; 
	constructor(private router:Router, private route: ActivatedRoute, private http: HttpClient) { }

	  ngOnInit() {
			this.sub = this.route.params.subscribe(params => {
			   this.id = +params['id']; // (+) converts string 'id' to a number			   
			});			
			return this.http.get(this.touristListUrl)
			.subscribe(tourists => {
				this.tourists = tourists;
				 //console.log(this.tourists);
				for(var i = 0; i < this.tourists.length; i++){
					if(parseInt(this.tourists[i].id)===this.id){
						this.data =this.tourists[i];
						break;
					}
				}
			});					  
	  }
	  
	  updateTourist(tourist){
		  this.touristObj = {
			  "first_name" : tourist.first_name,
			  "last_name" : tourist.last_name,
			  "email" : tourist.email,
			  "gender" : tourist.gender			  
		  };
		  //console.log(this.touristObj);
			const _url = `/api/get_data.php?action=update_tourist&id=${this.id}`;			
			this.http.put(_url, this.touristObj, httpOptions).subscribe();			
			this.router.navigate(['/tourist-list']);
	  }
}
