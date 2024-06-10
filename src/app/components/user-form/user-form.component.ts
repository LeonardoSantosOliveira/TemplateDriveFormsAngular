import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IUser } from '../../interfaces/user/user.interface';
import { GenreListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { convertPtBrDateToDateObj } from '../../utils/convert-ptBr-date-to-date-obj';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-PtBr-date';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {

  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList: GenreListResponse = [];

  @Input() genresList: GenreListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(
    private readonly _el: ElementRef,
  ) {

  }

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];
    if (USER_CHANGED) {
      this.onPassowordChange(this.userSelected.password);

      this.setBirthDateToDatepicker(this.userSelected.birthDate);

      this.filteredGenresList = this.genresList;
    }
  }

  onPassowordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
    this.maxDate = new Date();
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) {
      return;
    }
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  displayFn(genreId: number): string {
    const genreFound = this.genresList.find(genre => genre.id === genreId);
    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    const searchTerm = text.toLowerCase();
    if (typeof text === 'number') return;
    this.filteredGenresList = this.genresList.filter(genre => genre.description.toLowerCase().includes(searchTerm));
  }

  isAnyCheckBoxCheck(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite)
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) {
      this.focusOnInvalidControl(form);
      return;
    }

    this.onFormSubmitEmitt.emit();
    
  }

  focusOnInvalidControl(form: NgForm) {
    for (const control of Object.keys(form.controls)) {
      console.log(control)
      if(form.controls[control].invalid) {
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`)

        invalidControl.focus();

        break;
      }
    }
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

}
