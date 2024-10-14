import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WritableSignalComponent } from './signals/writable-signal/writable-signal.component';
import { ComputedSignalComponent } from './signals/computed-signal/computed-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WritableSignalComponent,
    ComputedSignalComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ag-signals';
}
