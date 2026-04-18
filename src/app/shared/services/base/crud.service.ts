import {QueryService} from './query.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class crudService<TResume> extends QueryService<TResume> {
  protected constructor(
    http: HttpClient,
    public baseUrl: string,
  ) {
    super(http, baseUrl);
  }

  public save(entity: any, id?: number | string): Observable<TResume> {
    const url = this.url;
    if (!!id) {
      return this.http.put<TResume>(url, entity);
    }
    return this.http.post<TResume>(url, entity);
  }

  public read(id: number | string): Observable<TResume> {
    const url = `${this.url}/${id}`;
    return this.http.get<TResume>(url);
  }
}
