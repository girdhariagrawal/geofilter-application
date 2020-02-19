import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestItemComponent } from './guest-item/guest-item.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent,
    GuestItemComponent,
    FilterFormComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
