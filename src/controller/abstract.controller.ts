import { Request, Response } from 'express';

export abstract class AbstractController {
    abstract GetAll(request: Request, response: Response): void;
    abstract GetById(request: Request, response: Response): void;
    abstract Create(request: Request, response: Response): void;
    abstract Update(request: Request, response: Response): void;
    abstract Delete(request: Request, response: Response): void;
}