import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';
import { ApiService } from './apiService.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'swicthMap-with-Filter';
  choices: string[] = [];
  inputControl = new FormControl();
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        filter((value) => value.trim() != 0 && !this.choices.includes(value)),
        debounceTime(500),
        switchMap((value) => this.apiService.getData(value))
      )
      .subscribe((data) => {
        this.choices = data;
      });
  }

  onSelectConvertValueToInputFn(event: any) {
    return event;
  }
}
