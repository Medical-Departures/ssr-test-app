import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: '<h1>{{params}}</h1>',
})
export class SecondComponent {
  params = null;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((qp) => {
      this.params = this.activeRoute.snapshot.params['slug'] ?? 'No param';
    });
  }
}
