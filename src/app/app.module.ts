import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/reducers/task.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskModule, StoreModule.forRoot({ tasks: taskReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
