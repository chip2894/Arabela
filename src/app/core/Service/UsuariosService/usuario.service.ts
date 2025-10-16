import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }
}
