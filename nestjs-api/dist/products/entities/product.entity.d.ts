import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    id: number;
    name: string;
    price: number;
    brand: string;
    image: string;
}
