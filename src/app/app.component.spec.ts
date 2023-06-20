import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {TestScheduler} from 'rxjs/testing';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rxjx6-main-fields-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rxjx6-main-fields-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'rxjx6-main-fields-test app is running!'
    );
  });

  it('should work', () => {
    new TestScheduler((a, b) => expect(a).toEqual(b)).run(({cold, expectObservable}) => {
      expectObservable(cold('-t', {t: 'hi'})).toBe('-t', {t: 'hi'});
    });
  });
});
