import { ProductsClientService } from './services/ProductsClientService';
import { AccountClientService } from './services/AccountClientService';
import { AuthClientService } from './services/AuthClientService';
import { UserAddressClientService } from './services/UserAddressClientService';

export const BASE_URL = 'https://demo.spreecommerce.org';
const MOCK_URL = 'https://stoplight.io/mocks/spark-solutions/api-v2/8739189';
const API_PATH = `${BASE_URL}/api/v2/storefront/`;
const SPREE_PATH = `${BASE_URL}/spree_oauth/token`;
const ADDRESS_PATH = `${MOCK_URL}/api/v2/platform/addresses`;

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
    public readonly getAccountService = (): AccountClientService => new AccountClientService(this.url);
    public readonly getAuthService = (): AuthClientService => new AuthClientService(SPREE_PATH);
    public readonly getUserAddress = (): UserAddressClientService => new UserAddressClientService(ADDRESS_PATH);
}
