import { ProductsClientService } from './services/ProductsClientService';

export const BASE_URL = 'https://demo.spreecommerce.org';
const API_PATH = `${BASE_URL}/api/v2/storefront/products`;

export class WebClient {
    private static instance: WebClient;

    private readonly url = API_PATH;

    public static getInstance(): WebClient {
        if (!WebClient.instance) {
            WebClient.instance = new WebClient();
        }

        return WebClient.instance;
    }

    public static createInstance() {
        WebClient.instance = new WebClient();
    }

    public readonly getProductsService = (): ProductsClientService => new ProductsClientService(this.url);
}
