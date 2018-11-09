import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StateChanged } from 'src/app/admin/services/service';
import { ServiceAdminService } from 'src/app/admin/_service-admin/service-admin.service';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'state-selector',
    template: `
            <select class="form-control" [name]="name" [(ngModel)]="value">
            <option *ngFor="let option of options" [value]="option.state"> {{option.value}}</option>
            </select>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectorComponent),
            multi: true
        }
    ]
})

export class SelectorComponent implements ControlValueAccessor {

    @Input()
    name: String;
    // tslint:disable-next-line:no-input-rename
    @Input('value')
    val: String;

    options: StateChanged[] = this.service.getState();
    onChange: any = () => { };
    onTouched: any = () => { };

    writeValue(obj: any): void {
        if (obj) {
            this.val = obj;
        }
    }

    get value() {
        return this.val;
    }

    set value(val) {
        this.val = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    constructor(private service: ServiceAdminService) { }

}
