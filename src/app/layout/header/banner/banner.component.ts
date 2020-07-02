import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  animationClass = 'animate__animated';

  // these variables hold animate.css class values for the whole banner
  bannerAnimationEffectClass = 'animate__fadeInDownBig';
  bannerAnimationSpeed = 'animate__faster';

  // this variable holds animate.css class value for the banner content container
  bannerContentAnimation = 'animate__fadeInDownBig';

  // this variable holds animate.css class value for the button exit
  bannerButtonAnimation = 'animate__rotateIn';

  constructor() { }

  ngOnInit(): void {
  }

  private updateBannerClass() {
    this.bannerAnimationEffectClass = 'animate__slideOutUp';
    this.bannerAnimationSpeed = '';
    this.bannerContentAnimation = 'animate__slideOutUp';
    this.bannerButtonAnimation = 'animate__rotateOut';
  }

  onScrollEvent = () => {
    this.updateBannerClass();
  }

  onClickEvent = () => {
    this.updateBannerClass();
  }
}
