import { IBaseModel } from '../interfaces/IBaseModel';
import { Peripheral } from './peripheral';

export class Gateway implements IBaseModel {
    serial: string | undefined;
    name: string | undefined;
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined;
    Peripherals: Peripheral[] | undefined;
}