import {
  Directive,
  ElementRef,
  HostBinding,
  EventEmitter,
  Output,
  OnDestroy,
  AfterViewInit,
  Input,
  OnInit
} from '@angular/core';

/**
 * A simple lightweight library for Angular with that detects when an
 * element is within the browsers viewport and adds a `in-viewport` or
 * `not-in-viewport` class to the element.
 *
 * @example
 * ```html
 * <p
 *  class="foo"
 *  snInViewport
 *  (inViewportChange)="myEventHandler($event)">
 *  Amet tempor excepteur occaecat nulla.
 * </p>
 * ```
 */
// @dynamic
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[snInViewport]',
  exportAs: 'snInViewport'
})
export class InViewportDirective implements AfterViewInit, OnDestroy, OnInit {
  private inViewport: boolean;
  private hasIntersectionObserver: boolean;
  @Input()
  inViewportOptions: IntersectionObserverInit;
  @Output()
  inViewportChange = new EventEmitter<boolean>();
  observer: IntersectionObserver;

  @HostBinding('class.sn-viewport--in')
  get isInViewport(): boolean {
    return this.inViewport;
  }

  @HostBinding('class.sn-viewport--out')
  get isNotInViewport(): boolean {
    return !this.inViewport;
  }

  constructor(private el: ElementRef) {
    this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
  }

  ngOnInit() {
    if (!this.hasIntersectionObserver) {
      this.inViewport = true;
      this.inViewportChange.emit(this.inViewport);
    }
  }

  ngAfterViewInit() {
    if (this.hasIntersectionObserver) {
      const IntersectionObserver = window['IntersectionObserver'];
      this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), this.inViewportOptions);

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
    }
  }

  intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (this.inViewport === entry.isIntersecting) {
        return;
      }
      this.inViewport = entry.isIntersecting;
      this.inViewportChange.emit(this.inViewport);
    });
  }

  private intersectionObserverFeatureDetection() {
    // Exits early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window['IntersectionObserverEntry']['prototype']
    ) {
      try {
        /**
        Minimal polyfill for Edge 15's lack of `isIntersecting`
        See: https://github.com/w3c/IntersectionObserver/issues/211
        the polyfill from the comment is not enough because some edged 15 versions have a wrong
        implementation of isIntersection
        On every browser which implement it correctly this call is throwing an error but not on Edge 15
        There for we need to overwrite the isIntersection getter
         */
        // tslint:disable-next-line:no-unused-expression
        window['IntersectionObserverEntry']['prototype']['isIntersecting'];
        Object.defineProperty(window['IntersectionObserverEntry']['prototype'], 'isIntersecting', {
          get() {
            return this.intersectionRatio > 0;
          }
        });
      } catch (err) {}
      return true;
    }
    return false;
  }
}
