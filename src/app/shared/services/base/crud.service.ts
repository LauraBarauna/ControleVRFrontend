import {QueryService} from './query.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { PaginatedListModel } from '../../models/paginated-list.model';

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
      return this.http.put<TResume>(`${url}/${id}`, entity);
    }
    return this.http.post<TResume>(url, entity);
  }

  public read(id: number | string): Observable<TResume> {
    const url = `${this.url}/${id}`;
    return this.http.get<TResume>(url);
  }

  public list(): Observable<PaginatedListModel<TResume>> {
    const url = this.url;
    return this.http.get<PaginatedListModel<TResume>>(url);
  }
}
