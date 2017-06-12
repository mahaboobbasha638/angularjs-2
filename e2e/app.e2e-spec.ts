import { NgroutePage } from './app.po';

describe('ngroute App', () => {
  let page: NgroutePage;

  beforeEach(() => {
    page = new NgroutePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
