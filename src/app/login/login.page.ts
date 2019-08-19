import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

    // check to see if a user is already logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.navCtrl.navigateForward(['/todos']);
      } else {
        // No user is logged in
      }
    })
  }
  ngOnInit() { }

  login() {
    console.dir(this.email);
    console.dir(this.password);
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (userObject) => {
        this.toastCtrl.create({
          message: "User logged in successfully",
          duration: 3000
        }).then((toast) => {
          toast.present();
        })
        this.navCtrl.navigateForward('/profile');
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000
        }).then((toast) => {
          toast.present();
        })
      });
  }

  register() {
    console.dir("Navigating to Register page");
    this.navCtrl.navigateForward("/register");
  }

  forgotPassword() {
    console.dir("Navigating to Forgot Password page");
    this.navCtrl.navigateForward("/forgot-password");
  }
}
