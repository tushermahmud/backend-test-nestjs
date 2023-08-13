import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(body: CreateProductDto): Promise<CreateProductDto & import("./entities/product.entity").Product>;
    findAll(page: number, limit: number): Promise<{
        products: import("./entities/product.entity").Product[];
    }>;
}
