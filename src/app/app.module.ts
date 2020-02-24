import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestApiService } from './shared/rest-api.service';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { DiceRollComponent } from './dice-roll/dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule, MatSelectModule, MatCardModule,
    MatCheckboxModule, MatTabsModule, MatTableModule,
    MatButtonModule, MatInputModule
  ],
  providers: [RestApiService],
  // exports: [RouterModule],

  bootstrap: [AppComponent]
})


export class AppModule { }
