import {Observable} from 'rxjs';
import {PaginatedListModel} from '../../models/paginated-list.model';
import {HttpClient} from '@angular/common/http';

export interface Queryable<T> {
  list(filtro?: Record<string, any>): Observable<PaginatedListModel<T>>
}

export abstract class QueryService<TResume> {

  private _url: string | undefined;

  protected constructor(
    protected http: HttpClient,
    url: string
  ) {
    this.url = url;
  }

  get url(): string {
    return <string>this._url;
  }

  set url(value: string) {
    this._url = `http://localhost:8080/api${value}`;
  }
}
