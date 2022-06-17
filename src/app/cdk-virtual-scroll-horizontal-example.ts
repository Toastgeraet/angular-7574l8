import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

/** @title Horizontal virtual scroll */
@Component({
  selector: 'cdk-virtual-scroll-horizontal-example',
  styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
  templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollHorizontalExample {
  resources = Array.from({ length: 10000 }).map((_, i) => `Resource #${i}`);
  dates = getDaysArray(new Date(2021, 0, 1), new Date(2023, 11, 31));
}

var getDaysArray = function (s: Date, e: Date) {
  for (
    var a = [], d = new Date(s);
    d <= new Date(e);
    d.setDate(d.getDate() + 1)
  ) {
    a.push(new Date(d));
  }
  return a;
};

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
