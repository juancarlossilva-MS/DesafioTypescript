import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(productId: string): Promise<import("./entities/product.entity").Product>;
    update(productId: string, updateProductDto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    remove(productId: string): Promise<void>;
}
