import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/reducers/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './state/effects/task.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TaskModule,
    StoreModule.forRoot({ tasks: taskReducer }),
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
