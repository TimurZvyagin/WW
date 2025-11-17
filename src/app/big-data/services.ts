import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { anotherData } from "./interfaces/bigInterfaces";

@Injectable({
  providedIn: 'root',
})

export class bigDataInfo{
    http=inject(HttpClient)
    constructor(){}
    baseApi:string="/"

    getTestAccount(){
    return this.http.get<anotherData[]>(`${this.baseApi}account`)

    }
}