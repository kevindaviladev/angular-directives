import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AtributeComponent } from './directivas/atributo/atribute/atribute.component';
import { EstructuralesComponent } from './directivas/estructurales/estructurales/estructurales.component';
import { AppRoutingModule } from './app.routing.module';
import { MostrarsiDirective } from './mostrarsi.directive';

@NgModule({
  declarations: [
    AppComponent,
    AtributeComponent,
    EstructuralesComponent,
    MostrarsiDirective,
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
