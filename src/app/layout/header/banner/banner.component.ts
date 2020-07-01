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

  animationClass = 'animate__animated';

  // these variables hold animate.css class values for the whole banner
  bannerAnimationEffectClass = 'animate__fadeInDownBig';
  bannerAnimationSpeed = 'animate__faster';

  // these variables hold animate.css class values for the banner content container
  bannerContentAnimation = 'animate__fadeInDownBig';

  constructor() { }

  ngOnInit(): void {
  }

  private updateBannerClass() {
    this.bannerAnimationEffectClass = 'animate__slideOutUp';
    this.bannerAnimationSpeed = '';
    this.bannerContentAnimation = 'animate__slideOutUp';
  }

  onScrollEvent = () => {
    this.updateBannerClass();
  }

  onClickEvent = () => {
    this.updateBannerClass();
  }
}
