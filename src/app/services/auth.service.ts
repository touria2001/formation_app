import { Injectable } from '@angular/core';
import { ProfileUser } from '../modals/user-profil';
import { Firestore, addDoc , collection} from '@angular/fire/firestore';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from '@angular/fire/auth'

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import { doc, getDoc } from "firebase/firestore";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   // private auth: Auth,
 //   private firestore: Firestore
 public firestore: AngularFirestore,
 public auth: AngularFireAuth
    ) { }
  


  async register(user: ProfileUser) {
    // try {
    //   const userP = await createUserWithEmailAndPassword(this.auth, user.email, user.password);
    //   const usersRef = collection(this.firestore, 'users');
    //   addDoc(usersRef, user);

    //   return userP;
    // } catch (e) {
    //   return null;
    // }
  }
 
  async login({ email, password }) {
    // try {
    //   const user = await signInWithEmailAndPassword(this.auth, email, password);
    //   return user;
    // } catch (e) {
    //   return null;
    // }
    
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (e) {
      return null;
    }

   }
  logout() { 
    // return signOut(this.auth);
  }
}
