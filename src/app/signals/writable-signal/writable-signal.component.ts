import { Component, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-writable-signal',
  standalone: true,
  imports: [KeyValuePipe],
  template: `
    <h3>Writable Signal</h3>
    <div>
      @for (item of mySignal() | keyvalue ; track $index) {
      <p>Current Value</p>
      <p>{{ item.key }}: {{ item.value }}</p>
      }
      <button (click)="setNewValue()">Set New Value</button>
      <button (click)="updateValue()">Update Value</button>
    </div>
  `,
})
export class WritableSignalComponent {
  mySignal = signal({ foo: 'bar' });

  setNewValue() {
    this.mySignal.set({ foo: 'bar1' });
  }

  updateValue() {
    this.mySignal.set({ ...this.mySignal(), foo: this.mySignal().foo + '1' });
  }
}
