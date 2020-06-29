export class ItemModel implements IItemModel {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public description: string,
        public price: number,
        public url_link: string
    ) { }
}

export interface IItemModel extends ItemModel { }