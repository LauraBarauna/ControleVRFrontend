export class PaginatedListModel<T> {
  total: number;
  pages: number;
  itens: T[];

  constructor() {
    this.total = 0;
    this.pages = 1;
    this.itens = [];
  }
}
