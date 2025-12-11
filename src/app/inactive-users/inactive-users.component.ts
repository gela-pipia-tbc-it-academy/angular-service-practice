import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent {
  inactiveUsers: string[] = this.userService.inactiveUsers;

  constructor(private userService: UserService) {}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
