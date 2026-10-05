import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-submit-button',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  standalone: true,
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss',
})
export class SubmitButtonComponent {
  @Input() label: string = 'Send';
  @Input() icon: string = 'music_note';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: string = 'button';
  /** Explains why the button is disabled; shown as a tooltip only while `disabled` is true. */
  @Input() disabledHint: string = '';
}
