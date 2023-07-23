import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  groceryItems: string[] = [
    'Apples',
    'Cheesecake',
    'Celery',
    'Green Tea',
    'Burgers',
    'Tuna',
    'Pasta',
  ];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.groceryItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    const index = this.groceryItems.indexOf(item);
    if (index !== -1) {
      this.groceryItems.splice(index, 1);
    }
  }
}
