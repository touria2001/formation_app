import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Formation } from '../services/data.service';
import { arrayUnion ,Firestore, collectionData, doc, docData, addDoc , collection} from '@angular/fire/firestore';
//import { deleteDoc, updateDoc } from '@firebase/firestore';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { UpdateData, getDoc } from 'firebase/firestore';
//import * as firebase from 'firebase/app';
//import firebase from "firebase/compat/app";
//import FieldValue = firebase.firestore.FieldValue;
import { deleteDoc, updateDoc, FieldValue } from '@firebase/firestore';
import { $ } from 'protractor';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  @Input() email: string;
  formation: Formation;
  reserved: string = "réserver";
  

  constructor(private firestore: Firestore, private dataService: DataService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataService.getFormationById(this.id).subscribe(res => {
      this.formation = res;
      console.log(res);
      console.log(this.id);
    });

  }
  // reserver(formation: Formation) {

  //   if (formation.reserve == true) {
  //     this.reserved = "réserver";
  //     formation.reserve = false;

  //   } else {
  //     this.reserved = "déja réservé";
  //     formation.reserve = true;
  //   }

  //   this.dataService.updateFormation(formation);
  // }
  reserver(formation: Formation){
    // var x =formation.id;
    // const formationsRef = doc(this.firestore, `users/rzWQO7tWDwdgjGqtOk7S`);
    // if(formation.id=="0jcyhtJO8i88vZF4bVqR"){
    //   return updateDoc(formationsRef,{{$x} : formation.id})

    // }
 // const formationsRef = this.firestore.collection("users").doc('rzWQO7tWDwdgjGqtOk7S');
   
  }

}
