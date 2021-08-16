import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class HotelService {
    public data: any[] = [];
    constructor(
        private http: HttpClient
    ) { }

    public getHotels() {
        return this.http.get(environment.URL_BACKEND + `hotel/read`);
    }

    public filterHotels(data: { name?: string, stars?: number[] }) {
        return this.http.post(environment.URL_BACKEND + 'hotel/filters', data);
    }
}