import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  private user;
  private annonces ;


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
   ) {
  }

  ngOnInit() {
    this.getAbonne();
  }


  getAbonne() {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(username).subscribe(user => {
      this.user = user;
      this.getAnnonce();
    }, err => {
      console.log(err);
    });
  }
  getAnnonce() {
      console.log(this.annonces);
  }

}
