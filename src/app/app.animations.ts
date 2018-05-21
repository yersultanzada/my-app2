import {
  animate, group, keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(3000, style({
        width: '200px',
        height: '200px'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'pink'})
      ]))
    ]),
    animate(1000)
  ]),
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);

export const changeWidthTrigger = trigger('changeWidth', [
  transition('* => *', [
    animate(1000, style({
      height: '10px'
    })),
    animate(1000, style({
      height: '*'
    }))
  ])
]);
