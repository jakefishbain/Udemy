import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnActive = false
  timesClicked = 0
  storedClicks = [0]

  onClickBtn() {
    this.btnActive = !this.btnActive
    this.timesClicked += 1
    this.storedClicks.push(this.timesClicked)
  }

  getColor(i: number) {
    return i >= 5 ? 'blue' : null
  } 
}
