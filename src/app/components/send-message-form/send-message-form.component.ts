import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css']
})
export class SendMessageFormComponent implements OnInit {

  showModalClass = '';
  animationClass = 'animate__animated';
  animationToggle = 'animate__fadeInDown';
  constructor() { }

  ngOnInit(): void {
  }

  private resetAnimationValues() {
    this.animationToggle = 'animate__fadeInDown';
    this.showModalClass = '';
  }

  toggleModal = () => {
    this.resetAnimationValues();
    this.showModalClass = 'show';
  }

  toggleEntryAndExit = () => {
    this.animationToggle = 'animate__fadeOutUp';
  }
}
