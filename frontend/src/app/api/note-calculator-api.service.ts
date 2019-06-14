import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteCalculatorApi {
    constructor(private httpClient: HttpClient) {  }

    public async calculateNotes(amount: number): Promise<number[]> {
        const response = await this.httpClient.get(`http://localhost:3001/calculate/${amount}`).toPromise(); // @TODO: use URL from env/config

        return <number[]>response;
    }
}
