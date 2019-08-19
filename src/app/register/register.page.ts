import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string;
  password: string;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }
  ngOnInit() {
  }
  register() {
    console.log(this.email);
    console.log(this.password);
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (userData) => {

        //navigate the user to the login page
        this.navCtrl.navigateForward('/todos')
        this.toastCtrl.create({
          message: "You have been successfully registered, you will be redirected to log into the app..",
          duration: 10000
        }).then((toast) => {
          toast.present();
        })
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000
        }).then((toast) => {
          toast.present();
        })
      });
  }
}

