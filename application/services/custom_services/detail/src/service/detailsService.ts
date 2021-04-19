import { Request, Response } from 'express';
import {detailsDao} from '../dao/detailsDao';
import { CustomLogger } from '../config/Logger'
let details = new detailsDao();

export class detailsService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpDelete')
     const  detailsId = req.params.id;
     details.GpDelete(detailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpDelete')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpUpdate')
     const  detailsData = req.body;
     details.GpUpdate(detailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpSearch')
     const  detailsData = req.query;
     details.GpSearch(detailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpSearchForUpdate')
     const  detailsData = req.body;
     details.GpSearchForUpdate(detailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpGetAllValues')
     
     details.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsService.ts: GpCreate')
     const  detailsData = req.body;
     details.GpCreate(detailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsService.ts: GpCreate')
         callback(response);
         });
    }


}