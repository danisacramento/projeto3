import{Geo} from './geo';

export class Address {
    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;

    public getStreet(): string {
        return this.street;
    }
    public getSuite(): string {
        return this.suite;
    }
    public getCity(): string {
        return this.city;
    }
    public getZipcode(): string {
        return this.zipcode;
    }
    public setStreet(street: string): void {
        this.street = street;
    }
    public setSuite(street: string): void {
        this.street = street;
    }
    public setCity(city: string): void {
        this.city = city;
    }
    public setZipcode(zipcode: string): void {
        this.zipcode = zipcode;
    }
}