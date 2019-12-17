export class Geo{
    private lat: number;
    private lng: number;
    private geo: Geo;

    public getLat(): number{
        return this.lat;
    }
    public getLng(): number{
        return this.lng;
    }
    public getGeo(): Geo{
        return this.geo;
    }
    public setLat(lat: number): void{
        this.lat = lat;
    }
    public setLng(lng: number):void{
        this.lng = lng;
    }
    public setGeo(geo: Geo): void{
        this.geo = geo;
    }
}