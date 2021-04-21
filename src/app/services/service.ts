import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Attendance {
    atten_id: string;
    name: string;
    create_time: string
}

@Injectable({
    providedIn: 'root'
})

export class Services {
    private url = 'https://fypfacerecog.herokuapp.com/api/attendance/'
    
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<[Attendance]>(this.url);
    }

    get(id: string) {
        return this.http.get<[Attendance]>(this.url + '/' + id);
    }

    delete(atten_id: string) {
        return this.http.delete(this.url + '/' + atten_id);
    }

    login(credentials: User): Observable<string> {
        return this.http.post<{ token: string }>(this.url, credentials).pipe(
            map(response => response.token)
          );
    }
}