import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../../../service/annonce.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {
  private annonces;

  constructor( private annonceService: AnnonceService

  ) { }

  ngOnInit() {
    this.getAllAnnonce();

  }

  getAllAnnonce() {
    this.annonceService.getAllAnnonce().subscribe(data => {
      console.log(data);
this.annonces = data ;
    }, error1 => {
console.log(error1) ;
    });
       }

}
