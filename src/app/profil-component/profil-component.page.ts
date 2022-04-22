import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService} from '../services/auth.service';
@Component({
  selector: 'app-profil-component',
  templateUrl: './profil-component.page.html',
  styleUrls: ['./profil-component.page.scss'],
})
export class ProfilComponentPage implements OnInit {
user$ = this.AuthService.currentUser$;

profileForm = new FormGroup({
  uid: new FormControl(''),
    photoURL:new FormControl(''),
    email:new FormControl(''),
    nom:new FormControl(''),
    prenom:new FormControl(''),
    age:new FormControl(''),
    etablissement:new FormControl(''),
    specialite:new FormControl(''),
});
  constructor() { }

  ngOnInit() {
  }

}
