import { MenuAdminModule } from './menu-admin.module';

describe('MenuAdminModule', () => {
  let menuAdminModule: MenuAdminModule;

  beforeEach(() => {
    menuAdminModule = new MenuAdminModule();
  });

  it('should create an instance', () => {
    expect(menuAdminModule).toBeTruthy();
  });
});
