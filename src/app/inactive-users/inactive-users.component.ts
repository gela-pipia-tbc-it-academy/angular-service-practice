import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss'],
})
export class InactiveUsersComponent {
  inactiveUsers: string[] = this.userService.inactiveUsers;
  inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;

  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}
  
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
