import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule],
  	declarations: [HomeComponent],
  	providers: [],
  	exports: [HomeComponent] })
export class HomeComponentModule {
}