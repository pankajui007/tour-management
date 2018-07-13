import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Tourist } from './tourist';  
import { User } from './user';  

const httpOptions = {
	headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TouristListService {
	
	constructor(private http: HttpClient, private messageService: MessageService) { }
	
	//Get Method
	getUserId = localStorage.getItem('userId'); 
	private touristListUrl = `/api/get_data.php?action=get_hero&userId=${this.getUserId}`; 
	touristList (): Observable<Tourist[]> {	
	  return this.http.get<Tourist[]>(this.touristListUrl)
	} 
	//Post Method
	addTourist(tourists:Tourist):Observable<Tourist[]>{		
		let _url: string = `/api/get_data.php?action=add_tourist&userId=${this.getUserId}`;
		return this.http.post<Tourist[]>(_url, tourists, httpOptions);
	}
	//Delete Method
	deleteTourist (id): Observable<{}> {		
		const _url = `/api/get_data.php?action=delete_tourist&id=${id}`; // DELETE api/heroes/42
		return this.http.delete(_url, httpOptions)		 
	  }	
	//Get Method	
	private userDetailUrl = `/api/get_data.php?action=get_user_detail&userId=${this.getUserId}`; 
	userDetail (): Observable<User[]> {	
	  return this.http.get<User[]>(this.userDetailUrl)
	} 	
	
	//*Put Method Profile Detail Edit	
	private editProfileUrl = `/api/get_data.php?action=edit-profile&userId=${this.getUserId}`; 
	editProfile (user:User): Observable<User[]> {	
	  return this.http.put<User[]>(this.editProfileUrl, user, httpOptions)
	} 	  
	  
	  
}
