// import Module from '~/abstracts/module';
import Events from '@/constants/events';
import uuid from '@/scripts/utilities/uuid';

export default class Hover {
  static readonly hoverClass = `is-hover`; // hoverクラスという静的プロパティを定義

  private mql = window.matchMedia(`(any-hover:hover)`); // デバイスがホバーをサポートしているかを判定

  moduleName: string;
  element: HTMLElement;
  props: {
    [key: string]: any;
  };
  uuid: string;

  constructor(element: HTMLElement, props = {}) {
    // super(element, props);

    this.moduleName = this.constructor.name;
    this.element = element;
    this.props = props;
    this.uuid = uuid();
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  init() {
    this.element.setAttribute(`data-${this.moduleName}-id`, this.uuid);

    if (!this.mql.matches) {
      return;
    }

    this.element.addEventListener(Events.MoEnter, this.onMouseEnter);
    this.element.addEventListener(Events.MoLeave, this.onMouseLeave);
  }

  destroy() {
    this.element.removeEventListener(Events.MoEnter, this.onMouseEnter);
    this.element.removeEventListener(Events.MoLeave, this.onMouseLeave);

    this.element.removeAttribute(`data-${this.moduleName}-id`);
  }

  private onMouseEnter(e: Event) {
    e.preventDefault();

    if (!this.element.classList.contains(Hover.hoverClass)) {
      this.element.classList.add(Hover.hoverClass);
    }
  }

  private onMouseLeave(e: Event) {
    e.preventDefault();

    if (this.element.classList.contains(Hover.hoverClass)) {
      this.element.classList.remove(Hover.hoverClass);
    }
  }
}
