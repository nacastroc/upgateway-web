import { IBaseModel } from "../interfaces/IBaseModel";
import { Gateway } from "./gateway";

export class Peripheral implements IBaseModel {
    id: number;
    vendor: string;
    date: string | Date;
    status: boolean = true;
    gateway: string;
    Gateway: Gateway;
}