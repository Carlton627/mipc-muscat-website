import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  animationClass = 'animate__animated';
  errorAnimationEffectClass = 'animate__fadeInDownBig';
  errorAnimationSpeed = 'animate__faster';

  showArrow = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private updateBannerClass() {
    this.errorAnimationEffectClass = 'animate__slideOutRight';
    this.errorAnimationSpeed = '';
  }

  // TODO: Add spinner for seamless loading if route animation don't work
  sendUserToHome = () => {
    this.updateBannerClass();
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 800);
  }

  animateArrow = () => {
    this.showArrow = !this.showArrow;
  }
}
