/* eslint-disable no-undef */

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('is an instance of Account', () => {
    expect(account).toBeInstanceOf(Account);
  });

  it('has an account balance of 0 when opened', () => {
    expect(account.balance()).toEqual(0);
  });
});
