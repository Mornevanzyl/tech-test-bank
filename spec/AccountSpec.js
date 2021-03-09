describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('is an instance of Account', () => {
    expect(account).toBeInstanceOf(Account);
  });

});
