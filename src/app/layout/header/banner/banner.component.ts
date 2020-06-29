import { Component, OnInit } from '@angular/core';

// font awesome icons
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faAngleDown = faAngleDown;

  // these variables hold animate.css class values
  bannerAnimationClass = '';
  bannerAnimationEffectClass = '';
  constructor() { }

  ngOnInit(): void {
  }

  private updateBannerClass() {
    this.bannerAnimationClass = 'animate__animated';
    this.bannerAnimationEffectClass = 'animate__fadeOutUp';
  }

  onScrollEvent = () => {
    this.updateBannerClass();
  }

  onClickEvent = () => {
    this.updateBannerClass();
  }
}
