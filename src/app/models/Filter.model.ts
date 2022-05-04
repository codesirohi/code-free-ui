import { Condition } from "./Condition.model";

export class Filter{
    public Conditions: Array<Condition>;
    public OrderByField:string;
    public IsOrderByFieldAsc?:boolean

    constructor(){}
}