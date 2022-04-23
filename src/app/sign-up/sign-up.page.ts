import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ProfileUser } from '../modals/user-profil';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  infoGeneral: FormGroup;
 userP: ProfileUser;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

  get email() {
    return this.infoGeneral.get('email');
  }
  get password() {
    return this.infoGeneral.get('password');
  }
  get prenom() {
    return this.infoGeneral.get('prenom');
  }
  get etablissement() {
    return this.infoGeneral.get('etablissement');
  }
  get specialite() {
    return this.infoGeneral.get('specialite');
  }
 
  get nom() {
    return this.infoGeneral.get('nom');
  }
  
 
  ngOnInit() {

    this.infoGeneral = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
       nom: ['', [Validators.required, Validators.minLength(2)]],
       specialite: ['', [Validators.required, Validators.minLength(2)]],
       etablissement: ['', [Validators.required, Validators.minLength(2)]],
       reserv: []


    });
  }
  async register() {
    // const loading = await this.loadingController.create();
    // await loading.present();
    // const user = await this.authService.register(this.infoGeneral.value);
    // await loading.dismiss();

    // if (user) {     
    //   this.router.navigateByUrl('/home', { replaceUrl: true });
    // } else {
    //   this.showAlert('l\'inscription a été échoué', 'Veuillez réssayer!');
    // }

   }


  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
