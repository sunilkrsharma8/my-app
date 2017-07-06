import { MyCommunityAppPage } from './app.po';

describe('my-community-app App', () => {
  let page: MyCommunityAppPage;

  beforeEach(() => {
    page = new MyCommunityAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
