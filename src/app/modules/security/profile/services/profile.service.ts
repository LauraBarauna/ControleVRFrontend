import { Injectable } from '@angular/core';
import { crudService } from '../../../../shared/services/base/crud.service';
import { UserModel } from '../../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService extends crudService<UserModel> {
  constructor(http: HttpClient) {
    super(http, '/users');
  }
}
