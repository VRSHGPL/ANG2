import { Ang2SBootPage } from './app.po';

describe('ang2-sboot App', function() {
  let page: Ang2SBootPage;

  beforeEach(() => {
    page = new Ang2SBootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
