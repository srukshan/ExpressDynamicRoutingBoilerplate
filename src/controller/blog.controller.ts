import { ResponseConfig } from './../config/response.config';
import { BlogService } from './../service/blog.service';
import { AbstractController } from "./abstract.controller";
import { Request, Response } from "express";
import { BlogModel } from '../model/blog.model';
import { RequestMapping, Route } from '../decorator/request.decorator';
import { RequestType } from '../constant/request.constant';

@Route('/blog')
export class BlogController extends AbstractController {
    @RequestMapping()
    GetAll(request: Request, response: Response): void {
        let service: BlogService = new BlogService();
        service.ListAll(request.body).then((items: BlogModel[]) => {
            let result: ResponseConfig = {
                IsSuccessful: true,
                Status: 200,
                Body: items
            }
            response.send(result);
        }).catch((err: any) => {
            let result: ResponseConfig = {
                IsSuccessful: false,
                Status: 500,
                Body: err
            }
            response.send(result);
        });
    }
    @RequestMapping(RequestType.GET, '/:id')
    GetById(request: Request, response: Response): void {
        let service: BlogService = new BlogService();
        service.FetchById(request.params.id).then((item: BlogModel) => {
            let result: ResponseConfig = {
                IsSuccessful: true,
                Status: 200,
                Body: item
            }
            response.send(result);
        }).catch((err: any) => {
            let result: ResponseConfig = {
                IsSuccessful: false,
                Status: 500,
                Body: err
            }
            response.send(result);
        });
    }
    @RequestMapping(RequestType.POST)
    Create(request: Request, response: Response): void {
        let service: BlogService = new BlogService();
        service.Add(request.body).then((item: BlogModel) => {
            let result: ResponseConfig = {
                IsSuccessful: true,
                Status: 200,
                Body: item
            }
            response.send(result);
        }).catch((err: any) => {
            let result: ResponseConfig = {
                IsSuccessful: false,
                Status: 500,
                Body: err
            }
            response.send(result);
        });
    }
    @RequestMapping(RequestType.PUT, '/:id')
    Update(request: Request, response: Response): void {
        let service: BlogService = new BlogService();
        service.Edit(request.body).then((item: BlogModel) => {
            let result: ResponseConfig = {
                IsSuccessful: true,
                Status: 200,
                Body: item
            }
            response.send(result);
        }).catch((err: any) => {
            let result: ResponseConfig = {
                IsSuccessful: false,
                Status: 500,
                Body: err
            }
            response.send(result);
        });
    }
    @RequestMapping(RequestType.DEL, '/:id')
    Delete(request: Request, response: Response): void {
        let service: BlogService = new BlogService();
        service.Remove(request.query.is).then((isRemoved: boolean) => {
            let result: ResponseConfig = {
                IsSuccessful: isRemoved,
                Status: 200,
                Body: null
            }
            response.send(result);
        }).catch((err: any) => {
            let result: ResponseConfig = {
                IsSuccessful: false,
                Status: 500,
                Body: err
            }
            response.send(result);
        });
    }


}