export class BaseService {
    // eslint-disable-next-line no-undef
    protected readonly parseResponse = (response: Response) => {
        if (response.ok) {
            return response.json();
        }
    };
}
