import { routes } from "../decorator/request.decorator";
import * as ScanService from './scan.service';
import * as express from 'express';
import { RouteType } from "../constant/route.constant";

export class RouteService {
    getRoutes(app: express.Express) {
        ScanService;
        routes.forEach((route: RouteType) => {
            app.use(route.path, route.router);
        })
    }
}