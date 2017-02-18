import { ProgressUpPage } from './app.po';

describe('progress-up App', function() {
  let page: ProgressUpPage;

  beforeEach(() => {
    page = new ProgressUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
