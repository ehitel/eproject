import { EprojectPage } from './app.po';

describe('eproject App', function() {
  let page: EprojectPage;

  beforeEach(() => {
    page = new EprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
