import { ListByNamePipe } from './list-by-name.pipe';

describe('ListByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ListByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
