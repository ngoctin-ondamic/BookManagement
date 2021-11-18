export interface IBook {
    id : number,
    name : string,
    author : string,
    cateId : number
}

export interface IBooks {
    bookList : Array<IBook>
}