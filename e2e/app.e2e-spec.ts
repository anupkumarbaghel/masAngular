import { MasAppPage } from './app.po';

describe('mas-app App', () => {
  let page: MasAppPage;

  beforeEach(() => {
    page = new MasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
