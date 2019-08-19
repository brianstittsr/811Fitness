import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { TElementContainerNode } from '@angular/core/src/render3/interfaces/node';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firstname: string;
  lastname: string ;
  phone: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goals: string;
  risks: string;
  moves: string;

  constructor() { }

  ngOnInit() {
  }

}
