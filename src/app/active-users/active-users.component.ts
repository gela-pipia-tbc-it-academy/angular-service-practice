import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  activeUsers: string[] = this.userService.activeUsers;

  constructor(private userService: UserService) {}

  
  onSetToInactive(id: number) {
      this.userService.onSetToInactive(id);
  }
}
