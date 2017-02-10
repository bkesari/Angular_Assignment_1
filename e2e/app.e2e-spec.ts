import { AngularAssignmentPage } from './app.po';

describe('angular-assignment App', function() {
  let page: AngularAssignmentPage;

  beforeEach(() => {
    page = new AngularAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
