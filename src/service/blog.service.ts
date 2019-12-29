import { AbstractService } from "./abstract.service";
import { BlogModel } from "../model/blog.model";
import { RequestConfig } from "../config/request.config";

export class BlogService extends AbstractService<BlogModel> {
    ListAll(config: RequestConfig): Promise<BlogModel[]> {
        throw new Error("Method not implemented.");
    }
    FetchById(id: any): Promise<BlogModel> {
        throw new Error("Method not implemented.");
    }
    Add(item: BlogModel): Promise<BlogModel> {
        throw new Error("Method not implemented.");
    }
    Edit(item: BlogModel): Promise<BlogModel> {
        throw new Error("Method not implemented.");
    }
    Remove(id: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}