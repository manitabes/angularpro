import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../../service/annonce.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  private user;
  private registerForm: FormGroup;
  private annonces;
private  nbreAbonee ;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private annnceSrvcie: AnnonceService
) {
  }

  ngOnInit() {
    this.getUser();
    this.getMesAnnonce();
    this.getNbreAbonne() ;

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
getMesAnnonce(){
    this.annnceSrvcie.getMyAnnonce().subscribe(data=>{
      this.annonces = data ;
    }, error => {
      console.log(error);
  });
}
  getUser() {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
       console.log(user);
    });
  }

  getNbreAbonne() {
    this.userService.getbnreAbonne().subscribe(data => {
      this.nbreAbonee = data;
      console.log(data);
    });
  }

}



