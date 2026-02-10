import { booleanAttribute, Component, computed, input } from '@angular/core';
import { buttonVariants } from './button.variants';

@Component({
  selector: 'ab-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class]': 'class()',
    '[attr.disabled]': 'disabled() ? true : undefined',
    '[attr.tabindex]': 'disabled() ? -1 : undefined',
  },
})
export class ButtonComponent {
  readonly color: any = input<'default' | 'grey'>('default');
  readonly userDisabled = input(undefined, {
    transform: booleanAttribute,
    alias: 'disabled',
  });
  protected readonly disabled = computed(() => this.userDisabled());

  protected readonly class = computed(() => {
    return buttonVariants({
      color: this.color(),
      disabled: this.disabled(),
    });
  });
    
    
}
