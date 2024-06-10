import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';



@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailPatternValidatorDirective,
    CredentialValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective
  ]
})
export class DirectivesModule { }
