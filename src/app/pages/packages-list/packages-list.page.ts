import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.page.html',
  styleUrls: ['./packages-list.page.scss'],
})
export class PackagesListPage implements OnInit {


    Cards = [
    {id: 1, name:'Superman',question_num:15,privat:true},
    {id: 2, name:'Batman',question_num:20,privat:false},
    {id: 5, name:'BatGirl',question_num:11,privat:true},
    {id: 3, name:'Robin',question_num:34,privat:false},
    {id: 4, name:'Flash',question_num:55,privat:true}
];

  constructor() { }

  ngOnInit() {
  }

}
