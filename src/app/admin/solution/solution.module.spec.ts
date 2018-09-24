import { SolutionModule } from './solution.module';

describe('SolutionModule', () => {
  let solutionModule: SolutionModule;

  beforeEach(() => {
    solutionModule = new SolutionModule();
  });

  it('should create an instance', () => {
    expect(solutionModule).toBeTruthy();
  });
});
