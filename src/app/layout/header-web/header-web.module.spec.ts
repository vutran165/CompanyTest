import { HeaderWebModule } from './header-web.module';

describe('HeaderWebModule', () => {
  let headerWebModule: HeaderWebModule;

  beforeEach(() => {
    headerWebModule = new HeaderWebModule();
  });

  it('should create an instance', () => {
    expect(headerWebModule).toBeTruthy();
  });
});
