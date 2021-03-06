import { ItemModel } from './item-model'

export class AccountModel {
    constructor(
        public id: string,
        public email: string,
        public password: string,
        public username: string,
        public address: string,
        public history : any[]
    ) { }
}

export interface IAccountModel extends AccountModel { }