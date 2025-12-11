import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent {
  @Input() inactiveUsers: string[] = [];
  @Output() userSetToActive = new EventEmitter(); 

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
