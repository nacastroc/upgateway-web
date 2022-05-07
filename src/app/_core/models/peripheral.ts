import { IBaseModel } from "../interfaces/IBaseModel";
import { Gateway } from "./gateway";

export class Peripheral implements IBaseModel {
    id: number | undefined;
    vendor: string | undefined;
    date: string | Date | undefined;
    status: boolean = true;
    gateway: Gateway | undefined;
}