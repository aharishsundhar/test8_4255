import { Request, Response, NextFunction } from "express";
import { detailsController } from '../controller/detailsController';


export class Routes {
    private details: detailsController = new detailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/details/:id').delete(this.details.GpDelete);
app.route('/details').put(this.details.GpUpdate);
app.route('/details/get/search').get(this.details.GpSearch);
app.route('/details/get/update').put(this.details.GpSearchForUpdate);
app.route('/details').get(this.details.GpGetAllValues);
app.route('/details').post(this.details.GpCreate);
     }

}