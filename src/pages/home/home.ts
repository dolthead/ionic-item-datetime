import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items: any[];
    startTime: string = "07:00";

    constructor(public navCtrl: NavController) {
        this.items = [{title: 'item1'}];
    }

    addItem() {
        this.items.push({ title: `item${ (this.items.length + 1) }` });
    }

}
