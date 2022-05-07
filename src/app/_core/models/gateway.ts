import { IBaseModel } from '../interfaces/IBaseModel';
import { Peripheral } from './peripheral';

export class Gateway implements IBaseModel {
    serial: string;
    name: string;
    address: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    Peripherals: Peripheral[] = [];
}