export interface IPagination<T> {
  data: T[];
  page: number;
  totalPage: number;
  totalItems: number;
}
export interface IPaginationFilter {
  page?: number;
  limit?: number;
  search?: string;
}
