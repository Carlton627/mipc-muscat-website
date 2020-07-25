import { Component, OnInit } from '@angular/core';
import { cardData } from 'src/utils/feature_card_data';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardData = cardData;

  constructor() { }

  ngOnInit(): void {
  }


  // core team section [start]
  scrollCardsHorizontallyLeft = (el: Element) => {
    const animTimeMs = 350;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 8)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft -= (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }

  scrollCardsHorizontallyRight = (el: Element) => {
    const animTimeMs = 350;
    const pixelsToMove = 300;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 10)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft += (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }

  showLeftButton(el: Element) {
    if (el.scrollLeft === 0) {
      return false;
    }
    return true;
  }

  showRightButton(el: Element) {
    const maxScrollWidth = el.scrollWidth - el.clientWidth;
    if (Math.ceil(el.scrollLeft) === maxScrollWidth) {
      return false;
    }
    return true;
  }

  scrollEvent(element, event) {
    this.showLeftButton(element);
  }
  // core team section [end]
}
