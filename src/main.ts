import modals from './js/modules/modals';
import sliders from './js/modules/sliders';
import forms from './js/modules/forms';
import mask from './js/modules/mask';
import checkTextInputs from './js/modules/checkTextInputs';
import showMoreStyles from './js/modules/showMoreStyles';
import calc from './js/modules/calc';
import filter from './js/modules/filter';
import pictureSize from './js/modules/pictureSize';
import accordion from './js/modules/accordion';
import burger from './js/modules/burger';
import scrolling from './js/modules/scrolling';
import drop from './js/modules/drop';

//когда вся DOM-структура загружена
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();

  sliders({
    slides: '.feedback-slider-item',
    dir: 'horizontal',
    prev: '.main-prev-btn',
    next: '.main-next-btn',
  });

  sliders({
    slides: '.main-slider-item',
    dir: 'vertical',
  });

  forms();

  mask('[name="phone"]');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  showMoreStyles({
    trigger: '.button-styles',
    wrapper: '#styles .row',
  });

  calc({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price',
  });

  filter();

  pictureSize('.sizes-block');

  accordion({
    triggersSelector: '.accordion-heading',
  });

  burger({
    menuSelector: '.burger-menu',
    burgerSelector: '.burger',
  });

  scrolling('.pageup');

  drop();
});
