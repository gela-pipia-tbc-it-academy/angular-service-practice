import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent {
  activeUsers: string[] = this.userService.activeUsers;
  activeToInactiveCounter = this.counterService.activeToInactiveCounter;

  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}
