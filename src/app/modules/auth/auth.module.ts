import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputComponent } from 'src/app/shared/components/controls/input/input.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    NzCheckboxModule,
    NzButtonModule,
    AuthRoutingModule,
    TranslateModule,
    NzSpinModule,
  ],
})
export class AuthModule {}
