import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Formation } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: String;
  formation: Formation;
  reserved: String = "réserver";

  constructor(private dataService: DataService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataService.getFormationById(this.id).subscribe(res => {
      this.formation = res;
      console.log(res);
      console.log(this.id);
    });

  }
  reserver(formation: Formation) {

    if (formation.reserve == true) {
      this.reserved = "réserver";
      formation.reserve = false;

    } else {
      this.reserved = "déja réservé";
      formation.reserve = true;
    }

    this.dataService.updateFormation(formation);
  }

}
