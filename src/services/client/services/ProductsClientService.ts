import { GetProductItemModelResponse, GetProductsListModelResponse } from '../../../types';
import { BaseService } from './BaseService';

export class ProductsClientService extends BaseService {
    private readonly url: string;

    constructor(url: string) {
        super();

        this.url = url;
    }

    public readonly getProductsList = (page: number, perPage: number): Promise<GetProductsListModelResponse> =>
        fetch(
            `${this.url}products?page=${page}&per_page=${perPage}&include=images&fields%5Bproduct%5D=name%2Cdisplay_price%2Cimages&image_transformation%5Bsize%5D=240x240`,
            {
                method: 'GET',
            }
        ).then((response) => this.parseResponse(response));

    public readonly getProduct = (id: number): Promise<GetProductItemModelResponse> =>
        fetch(
            `${this.url}products/${id}?include=option_types%2Cimages%2Cvariants&fields%5Bproduct%5D=images%2Cprice%2Ccurrency%2Cname%2Cdescription%2Cdisplay_price&image_transformation%5Bsize%5D=500x500`,
            {
                method: 'GET',
            }
        ).then((response) => this.parseResponse(response));
}
