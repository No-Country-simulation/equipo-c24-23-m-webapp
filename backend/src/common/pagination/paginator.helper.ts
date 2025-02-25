import { SortOrder } from '../pagination/type/paginator.type';
import { ResponseList } from './type/paginator.type';

export class Paginator {
  public static Format<T>(
    data: T[],
    count: number,
    page: number,
    limit: number,
    search: string,
    order: SortOrder,
  ): ResponseList<T> {
    const totalPages = Math.ceil(count / limit);

    return {
      totalPages,
      hasPrevPage: page > 1,
      hasNextPage: page < totalPages,
      page,
      limit,
      totalDocs: count,
      search,
      order,
      data,
    };
  }
}
