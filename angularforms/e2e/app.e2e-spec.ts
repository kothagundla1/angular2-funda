import { AngularformsPage } from './app.po';

describe('angularforms App', function() {
  let page: AngularformsPage;

  beforeEach(() => {
    page = new AngularformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
