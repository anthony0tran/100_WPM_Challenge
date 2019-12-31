import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Road To 100 WPM';

  constructor(private renderer: Renderer2) {
  }

  @ViewChild('kbIcon', null) kb: ElementRef;

  // These functions are essentially hover for the keyboard icon.
  // They change to color on hover.
  enterKbIcon() {
    this.renderer.setStyle(this.kb.nativeElement, 'color', this.generateRandomHexColor());
  }

  leaveKbIcon() {
    this.renderer.setStyle(this.kb.nativeElement, 'color', 'white');
  }

  generateRandomHexColor(): string {
    const charCollection: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += charCollection[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}


