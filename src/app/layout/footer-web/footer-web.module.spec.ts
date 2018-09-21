import { FooterWebModule } from './footer-web.module';

describe('FooterWebModule', () => {
  let footerWebModule: FooterWebModule;

  beforeEach(() => {
    footerWebModule = new FooterWebModule();
  });

  it('should create an instance', () => {
    expect(footerWebModule).toBeTruthy();
  });
});
