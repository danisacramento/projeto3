import {Address} from './address';
import {Company} from './company';

export class User {
    private id: number;
    private name: string;
    private username: string;
    private email: string;
    private phone: string;
    private website: string;
    private address: Address;
    private company: Company;

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getUsername(): string {
        return this.username;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPhone():string{
        return this.phone;
    }
    public getWebsite():string{
        return this.website;
    }
    public getAddress(): Address{
        return this.address;
    }
    public getCompany(): Company{
        return this.company;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setPhone(phone: string):void{
        this.phone = phone;
    }
    public setWebsite(website: string):void{
        this.website = website;
    }
    public setAddress(address: Address):void{
        this.address = address;
    }
    public setCompany(company: Company): void{
        this.company = company;
    }
}