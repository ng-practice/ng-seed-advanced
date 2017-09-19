import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'awr-password-inputs',
  templateUrl: './password-inputs.component.html',
  styleUrls: ['./password-inputs.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputs),
    multi: true
  }]
})
export class PasswordInputs implements ControlValueAccessor {
  password: string;
  verification: string;

  propagate: (value: string) => void;

  writeValue(value: string): void {
    if (!value) {
      this.password = value;
      this.verification = value;
    }

    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.propagate = fn;
  }
  registerOnTouched(fn: any): void {
    // ..
  }

  propagateNewPassword() {
    if (this.password === this.verification) {
      this.propagate(this.password);
    } else {
      this.propagate(null);
    }
  }
}
