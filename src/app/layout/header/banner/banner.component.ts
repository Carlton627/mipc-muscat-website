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
  bannerAnimationClass = 'animate__animated';
  bannerAnimationEffectClass = 'animate__fadeInDownBig';
  bannerAnimationSpeed = 'animate__faster';
  constructor() { }

  ngOnInit(): void {
  }

  private updateBannerClass() {
    this.bannerAnimationEffectClass = 'animate__slideOutUp';
    this.bannerAnimationSpeed = '';
  }

  onScrollEvent = () => {
    this.updateBannerClass();
  }

  onClickEvent = () => {
    this.updateBannerClass();
  }
}
