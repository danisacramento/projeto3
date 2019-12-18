import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/user.service';
import { User } from './../model/tarefa';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  id: number
  user: User
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }
  searchClick() {
    this.UserService.get(this.id).subscribe((userOut: User) => {
      this.user = userOut;
      console.log(this.user)
    });
  }

}