import { Request, Response } from 'express';
import { detailsService } from '../service/detailsService';
import { CustomLogger } from '../config/Logger'
let details = new detailsService();

export class detailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
details.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpDelete');
    })}
public GpUpdate(req: Request, res: Response) {
details.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
details.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
details.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
details.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
details.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsController.ts: GpCreate');
    })}


}