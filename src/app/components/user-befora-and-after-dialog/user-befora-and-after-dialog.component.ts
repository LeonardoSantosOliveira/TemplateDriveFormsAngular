import { IUser } from '../../interfaces/user/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'user-befora-and-after-dialog',
  templateUrl: './user-befora-and-after-dialog.component.html',
  styleUrl: './user-befora-and-after-dialog.component.scss'
})
export class UserBeforaAndAfterDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {originalUser: IUser, updatedUser: IUser}
  ) {}
}
