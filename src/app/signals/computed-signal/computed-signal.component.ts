import { Component, signal, computed, effect } from '@angular/core';
type OrderStatus = 'placed' | 'cooking' | 'delivered';
@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  template: `
    <h3>Computed Signal</h3>
    <div>
      <p>Order Status: {{ orderStatus() }}</p>
      <p>Food Preparation Status: {{ prepareFoodValue() }}</p>
    </div>
    <button (click)="setOrderStatus()">Set orderStatus</button>
  `,
})
export class ComputedSignalComponent {
  isAlreadySet = false;
  orderStatus = signal<OrderStatus>('placed');


  prepareFoodValue = computed(() => {
    return this.orderStatus() === 'placed' ? 'preparing' : 'idle';
  });

  setOrderStatus() {
    this.isAlreadySet = !this.isAlreadySet;
    this.isAlreadySet ? this.orderStatus.set('placed') : this.orderStatus.set('delivered');
  }

  constructor() {
    // Update order status triggers recomputation of prepareFoodValue
    this.orderStatus.set('cooking');
    effect(() => {
    console.log(`Order status changed to: ${this.orderStatus()}`);
  });
  }
}
