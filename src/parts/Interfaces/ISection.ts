interface ISectionPart{
    id: number;
    name: string;
    category: string;
    description: string
    price: string;
}


export interface ISectionParts{
    data: ISectionPart[]
}