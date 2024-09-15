import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frella-presentation',
  templateUrl: './frella-presentation.component.html',
  styleUrls: ['./frella-presentation.component.scss'],
})
export class FrellaIntroComponent {

  @Input() name?: string;

}
