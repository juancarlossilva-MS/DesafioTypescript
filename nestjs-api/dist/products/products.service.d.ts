import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productModel;
    constructor(productModel: typeof Product);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(productId: number): Promise<Product>;
    update(productId: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(productId: number): Promise<void>;
}
