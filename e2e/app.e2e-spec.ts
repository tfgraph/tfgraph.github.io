import { TfgraphPage } from './app.po';

describe('tfgraph App', () => {
  let page: TfgraphPage;

  beforeEach(() => {
    page = new TfgraphPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
