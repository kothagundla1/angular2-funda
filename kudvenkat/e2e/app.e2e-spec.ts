import { KudvenkatPage } from './app.po';

describe('kudvenkat App', function() {
  let page: KudvenkatPage;

  beforeEach(() => {
    page = new KudvenkatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
