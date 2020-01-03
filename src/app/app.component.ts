import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RegisterComponent} from './components/register/register.component';
import {UserComponent} from './components/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Road To 100 WPM';

  constructor(private renderer: Renderer2, private dialog: MatDialog) {
  }

  @ViewChild('kbIcon', null) kb: ElementRef;

  // These functions are essentially hover for the keyboard icon.
  // They change to color on hover.
  enterKbIcon($event: MouseEvent) {
    this.renderer.setStyle(this.kb.nativeElement, 'color', this.generateRandomHexColor());
  }

  leaveKbIcon($event: MouseEvent) {
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

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {});
  }
}


