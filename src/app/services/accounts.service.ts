import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable , throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root' })
export class AccountService {

    //api url from environment variables
    private url = environment.ApiUrl;

    constructor(private http: HttpClient) { }

    //get all acounts
    public getAccounts(): Observable<any> {
        return this.http.get(this.url + 'api/accounts').pipe(
        map((response: Response) => {
            return response;
        }), catchError( this.handleError));
    }

    //handling the errors
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}

