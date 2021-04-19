import * as mongoose from 'mongoose';
import detailsModel from '../models/details';
import { CustomLogger } from '../config/Logger'


export class detailsDao {
    private details = detailsModel;
    constructor() { }
public GpDelete(detailsId, callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpDelete')

this.details.findByIdAndRemove(detailsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(detailsData, callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpUpdate')

this.details.findOneAndUpdate({ _id: detailsData._id }, detailsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(detailsData, callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(detailsData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.details.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(detailsData, callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpSearchForUpdate')

this.details.findOneAndUpdate({ _id: detailsData._id }, detailsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpGetAllValues')

this.details.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(detailsData, callback){
new CustomLogger().showLogger('info', 'Enter into detailsDao.ts: GpCreate')
let temp = new detailsModel(detailsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from detailsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}