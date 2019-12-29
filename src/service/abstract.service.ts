import { RequestConfig } from "../config/request.config";

export abstract class AbstractService<T> {
    abstract ListAll(config: RequestConfig): Promise<T[]>;
    abstract FetchById(id: any): Promise<T>;
    abstract Add(item: T): Promise<T>;
    abstract Edit(item: T): Promise<T>;
    abstract Remove(id: any): Promise<boolean>;
}