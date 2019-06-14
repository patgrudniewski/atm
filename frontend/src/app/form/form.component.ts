import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NoteCalculatorApi } from '../api/note-calculator-api.service';

@Component({
    selector: 'atm-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    private error: string|null = null;
    private notes: number[]|null = null;

    constructor(private calculatorApi: NoteCalculatorApi) {  }

    public form = new FormGroup({
        amount: new FormControl(0),
    });

    public async submit() {
        this.error = null;
        this.notes = null;

        try {
            this.notes = await this.calculatorApi.calculateNotes(this.form.value.amount);
        } catch (ex) {
            this.error = ex.error;
        }
    }

    public hasError() {
        return null !== this.error;
    }

    public getResultMessage() {
        if (this.hasError()) {
            return this.error;
        } else if (null === this.notes) {
            return null;
        }

        return `ATM will pay following notes: ${this.notes}`;
    }
}
