import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { filter } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxMaskDirective,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  providers: [],
})
export class ApplicationComponent {
  private readonly destroyRef = inject(DestroyRef)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl(7, [Validators.required, Validators.minLength(11)]),
    description: new FormControl(''),
    car: new FormControl('', [Validators.required]),
  });
  phoneMask = '0 (000) 000-00-00';
  constructor() {
    this.form.controls.phone.valueChanges
      .pipe(
        filter((value) => !value),takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((resultPhone) => {
        console.log(resultPhone);

        this.form.controls.phone.patchValue(7, { emitEvent: false });
      });
  }
  Submit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }
  calcar: string = '';
}
