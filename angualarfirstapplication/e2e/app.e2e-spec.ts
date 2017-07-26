import { AngualarfirstapplicationPage } from './app.po';

describe('angualarfirstapplication App', function() {
  let page: AngualarfirstapplicationPage;

  beforeEach(() => {
    page = new AngualarfirstapplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
