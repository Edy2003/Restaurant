import { Component, OnInit } from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] | undefined;
  selectedDish: Dish | undefined;
  constructor(private dishServise:DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishServise.getDishes()
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
