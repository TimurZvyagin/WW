import { Component, DestroyRef, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  styleUrl: './modal-mustang.component.scss',
  standalone: true,
  selector: 'modal-mustang',
  templateUrl: './modal-mustang.component.html',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModalMustangComponent implements OnInit {
  object = Object;
  private readonly destroyRef = inject(DestroyRef)
 

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    optionCar: new FormControl('', [Validators.required]),
    optionModel: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
  });

  constructor(
    private readonly toastr: ToastrService,
    public dialogRef: MatDialogRef<ModalMustangComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null,
  ) {}

  ngOnInit(): void {
    // Подписка на изменения поля "option"
    this.form
      .get('optionCar')
      ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string | null) => {
        const controlModel = this.form.get('optionModel');

        this.availableModels = value ? this.allModels[value] || [] : [];

        this.form.get('optionModel')?.reset(); // чтобы не оставалось прежнее значение модели невидимое

        if (value) {
          controlModel?.enable();
        } else {
          controlModel?.disable(); // Блокируем поле, если ничего не выбрано
        }
        // if (this.form.get('optionCar')?.value === 'VOLVO') {
        //   controlModel?.disable();
        // } это код если ты хочешь чтобы блокировалось поле моделей при выборе VOLVO
      });
  }

  availableModels: string[] = [];

  allModels: { [key: string]: string[] } = {
    mustang: ['gt500', 'shelby', 'ford'],
    bexa: ['m3', 'x7', 'x5'],
    VOLVO: ['v60', 'v90', 's60'],
    MercEdes: ['GTr', 'E-class', 'C-class'],
  };

  onSubmit(): void {
    if (this.form.get('optionCar')?.value === 'VOLVO') {
      console.log(null);

      this.toastr.error('Мы не обслуживаем бездарей');
    } else {
      this.dialogRef.close(this.form.value);

      this.toastr.success('Машина успешно выбрана');
    }
  }

}
