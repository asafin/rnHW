export type CurrencyType = 'USD';

export interface RecordModel {
    id: string;
}

export interface LookupModel extends RecordModel {
    title: string;
}
