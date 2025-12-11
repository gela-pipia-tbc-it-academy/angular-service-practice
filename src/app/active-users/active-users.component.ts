import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  @Input() activeUsers: string[] = [];
  @Output() userSetToInactive = new EventEmitter();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
