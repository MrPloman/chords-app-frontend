import { animate, group, query, style, transition, trigger } from '@angular/animations';

/**
 * Cross-fades the outgoing and incoming route so navigation between
 * guesser/handbook/options/progression never feels like an abrupt content swap.
 */
export const routeFadeAnimation = trigger('routeFade', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [style({ opacity: 1 })], { optional: true }),
    group([
      query(':leave', [animate('150ms cubic-bezier(0.4, 0, 1, 1)', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [animate('200ms 100ms cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1 }))], { optional: true }),
    ]),
  ]),
]);
