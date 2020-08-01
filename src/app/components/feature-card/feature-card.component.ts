import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {
  // properties from home component
  @Input() imgSrc: string;
  @Input() cardTitle: string;
  @Input() cardName: string;
  @Input() cardDesc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
