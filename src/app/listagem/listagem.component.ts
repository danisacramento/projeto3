import{User} from '../model/user';
import{UserService} from '../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor(private UserService: UserService) { }

  Users: User[];
  ngOnInit() {
    this.findAll();
  }
  findAll(){
  this.UserService.getAll().subscribe((UserOut: User[]) =>{
    this.Users =UserOut;
  })
}
}