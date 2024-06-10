import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenreListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { UserBeforaAndAfterDialogComponent } from './components/user-befora-and-after-dialog/user-befora-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  usersList: UsersListResponse = [];
  genresList: GenreListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onFormSubmit() {

    if(this.userSelectedIndex === undefined) {
      return;
    }
    
    const originalUser = this.usersList[this.userSelectedIndex]

    this.openBeforeAndAfterDialog(originalUser, this.userSelected, this.userSelectedIndex);
  }

  openBeforeAndAfterDialog(originalUser: IUser, updatedUser: IUser, userSelectedIndex: number) {
    const dialogRef = this._matDialog.open(UserBeforaAndAfterDialogComponent, {
      minWidth: '70%',
      data: {
        originalUser,
        updatedUser,
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.confirmUserUpdate(updatedUser, userSelectedIndex);
      }
    })
  }

  confirmUserUpdate(updatedUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updatedUser);

    console.group('Alteração finalizada - Lista de usuários atualizadas:')
    console.log('Lista de usuários atual: ', this.usersList);
    console.groupEnd();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    })
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    })
  }
}
