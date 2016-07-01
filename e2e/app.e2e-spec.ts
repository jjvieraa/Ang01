import { P02Page } from './app.po';

describe('p02 App', function() {
  let page: P02Page;

  beforeEach(() => {
    page = new P02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
