'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /reader when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/reader");
  });


  describe('reader', function() {

    beforeEach(function() {
      browser.get('index.html#/reader');
    });


    it('should render reader when user navigates to /reader', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/reader/);
    });

  });


  describe('library', function() {

    beforeEach(function() {
      browser.get('index.html#/library');
    });


    it('should render library when user navigates to /library', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/library/);
    });

  });
});
