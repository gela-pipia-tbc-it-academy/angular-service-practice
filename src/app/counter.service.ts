import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CounterService {
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    onIncrementAtiveToInactive() {
        this.activeToInactiveCounter += 1;
        console.log('active to inactive counter:', this.activeToInactiveCounter);
    }
    onIncrementInactiveToActive() {
        this.inactiveToActiveCounter += 1;
        console.log('inactive to active counter:', this.inactiveToActiveCounter);
    }
}