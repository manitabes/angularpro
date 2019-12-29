import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent implements OnInit {

  private categories;
  private subCatgories;

  constructor(private catService: CategoryService) { }

  ngOnInit() {
    console.log('eeeeeeeeeeeeeeeeeee');
    this.getCategories();
  }

  getCategories() {
    this.catService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, err => {
      console.log(err);
    });
  }

  getSubCategories(cat) {
    const link = cat;
    this.catService.getSubCategories(link).subscribe(scat => {
      this.subCatgories = scat ;
      console.log(this.subCatgories);
    });
  }

}
