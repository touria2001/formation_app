import { Injectable } from '@angular/core';
import { Firestore , collectionData, doc, docData, addDoc , collection} from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from '@firebase/firestore';

import { Observable } from 'rxjs';

export interface Formation {
  id?: string;
  nom: string;
  date: string;
  description: string;
  prix: number;
  reserve: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
  getFormations(): Observable<Formation[]>{
    const formationsRef = collection(this.firestore, 'formations');
    return collectionData(formationsRef, {idField: 'id'}) as Observable<Formation[]> ;
  }

  getFormationById(id): Observable<Formation> {
    const formationDocRef = doc(this.firestore, `formations/${id}`);
    return docData(formationDocRef, {idField: 'id'}) as Observable<Formation>;
  }
  addFormation(formation: Formation){
    const formationsRef = collection(this.firestore, 'formations');
    return addDoc(formationsRef, formation);
  }
  deleteFormation(formation: Formation){
    const formationsDocRef = doc(this.firestore, `formations/${formation.id}`);
    return deleteDoc(formationsDocRef) ;
  }
  updateFormation(formation : Formation){
    const formationsRef = doc(this.firestore, `formations/${formation.id}`);
    return updateDoc(formationsRef,{nom: formation.nom,date: formation.date,description: formation.description,prix: formation.prix,reserve: formation.reserve}) ;
  }
}
