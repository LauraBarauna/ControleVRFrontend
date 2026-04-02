import {QueryService} from './query.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class CrusService<TResume> extends QueryService<TResume>{

  protected constructor(
    http: HttpClient,
    public baseUrl: string
  ) {
    super(http, baseUrl);
  }

  public save<T>(entity: any, id?: number | string): Observable<T> {
    const url = this.url;
    if (!!id) {
      return this.http.put<T>(url, entity);
    }
    return this.http.post<T>(url, entity);
  }

}
