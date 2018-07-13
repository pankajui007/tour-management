import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../user';

const httpOptions = {
	headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AuthService {
	//private BASE_URL: string = 'http://localhost:5000/auth';
	private BASE_URL: string = '/api/get_data.php';
	private headers: Headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: HttpClient) {}
	
	public login(user:User): Observable<any> {
		let url: string = `${this.BASE_URL}?action=login`;
		return this.http.post(url, user, httpOptions);
	}
	
	public register(user:User): Observable<any> {
		let url: string = `${this.BASE_URL}?action=register`;
		return this.http.post(url, user, httpOptions);
	}
	public forgotpassUpdate(user:User): Observable<any> {
		let url: string = `${this.BASE_URL}?action=updatePassword`;
		return this.http.post(url, user, httpOptions);
	}

}
