import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/base-service';
import {User} from '../../models/User';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private routePrefix = 'user';
  constructor(private httpService: HttpService) { }

  getUser(id: number) {
    return this.httpService.getRequest<User>(environment.api + this.routePrefix + '/' + `${id}`);
  }

  addUser(user: User) {
    const str = environment.api + this.routePrefix;
    return this.httpService.postFullRequest<User>(`${str}`, user);
  }
}
