import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../user.module';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  findUser(): Observable<User[]> {
    return this.http.get<User[]>('/users');
  }
}
