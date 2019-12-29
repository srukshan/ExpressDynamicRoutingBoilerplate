import { RouteType } from './../constant/route.constant';
import { RequestType } from "../constant/request.constant";
import { Router } from 'express';

export const routes: RouteType[] = [];

export function Route(path: string) {
    return function(constructor: Function) {
        let newPath: string = path.substr(0, 1) === '/' ? path : ('/' + path);
        routes.push({
            path: newPath,
            router: constructor.prototype.router
        });
    }
}

export function RequestMapping(type: RequestType = RequestType.GET, path: string = '/') {
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        let prototype: any = target.constructor.prototype;
        if(!prototype.router) {
            prototype.router = Router();
        }
        let router: Router = prototype.router;

        switch(type) {
            case RequestType.DEL: router.delete(path, descriptor.value); break;
            case RequestType.POST: router.post(path, descriptor.value); break;
            case RequestType.PUT: router.put(path, descriptor.value); break;
            default: router.get(path, descriptor.value);
        }
        
        return descriptor;
    }
}