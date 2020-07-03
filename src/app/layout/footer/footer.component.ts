import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
