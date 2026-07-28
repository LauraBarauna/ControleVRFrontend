import {Injectable} from '@angular/core';
import {crudService} from '../../../shared/services/base/crud.service';
import {LoginModel} from '../models/login.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginOutputModel} from '../models/login-output.model';

@Injectable()
export class UserLoginService extends crudService<LoginModel> {
  constructor(
    http: HttpClient
  ) {
    super(http, '/auth/login');
  }

  login(entity: LoginModel): Observable<LoginOutputModel> {
    const url = this.url;
    return this.http.post<LoginOutputModel>(url, entity);
  }
}
