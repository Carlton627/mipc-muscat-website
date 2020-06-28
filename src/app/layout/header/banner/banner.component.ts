import { Component, OnInit, ElementRef } from '@angular/core';

// font awesome
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faAngleDown = faAngleDown;
  constructor() { }

  ngOnInit(): void {
  }

  // TODO: Access banner section tag class proper
  onScrollEvent = () => {
  }

  onClickEvent = () => {
  }
}
