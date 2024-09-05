import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './apiService.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let apiServie:ApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule, RouterOutlet, MatCardModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    }).compileComponents();
    apiServie = TestBed.inject(ApiService);

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should call ngOnInit",fakeAsync(()=>{

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputControl= new FormControl();
    spyOn(apiServie, 'getData').and.returnValue(of(['one']));
    app.ngOnInit();
    app.inputControl.setValue('one');
    tick(500);
    expect(app.choices).toEqual(['one']);

  }))






});
