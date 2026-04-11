import {Injectable} from '@angular/core';
import {CrusService} from '../../../shared/services/base/crud.service';
import {UserModel} from '../../../shared/models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserRegisterService extends CrusService<UserModel>{

  constructor(
    http: HttpClient
  ) {
    super(http, '/users');
  }

}
