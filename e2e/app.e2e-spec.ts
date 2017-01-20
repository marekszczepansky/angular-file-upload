import { Angular2CliBootstrapSeedPage } from './app.po';

describe('angular2-cli-bootstrap-seed App', function() {
  let page: Angular2CliBootstrapSeedPage;

  beforeEach(() => {
    page = new Angular2CliBootstrapSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
