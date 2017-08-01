import { AngulardirectivePage } from './app.po';

describe('angulardirective App', function() {
  let page: AngulardirectivePage;

  beforeEach(() => {
    page = new AngulardirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
