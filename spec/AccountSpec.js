/* eslint-disable no-undef */

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('General behaviour/attributes', () => {
    it('is an instance of the Account class', () => {
      expect(account).toBeInstanceOf(Account);
    });
    it('has an account balance of 0 when opened', () => {
      expect(account.balance()).toEqual(0);
    });
    it('keeps a transaction record of all deposts and withdrawals', () => {
      account.deposit(10);
      account.withdraw(5);
      expect(account.transactions().length).toEqual(2);
    });
  });

  describe('Deposits:', () => {
    it('has the facility to deposit money into the account', () => {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });

    it('only accepts positive amounts for deposits', () => {
      expect(() => { account.deposit(-10); }).toThrowError('Only positive amounts are accepted for deposits');
    });
  });

  describe('Withdrawals:', () => {
    it('has the facility to withdraw money from the account', () => {
      account.deposit(10);
      account.withdraw(10);
      expect(account.balance()).toEqual(0);
    });

    it('only accepts positive values for withdrawals', () => {
      expect(() => { account.withdraw(-10); }).toThrowError('Only positive values are accepted for withdrawals');
    });

    it('validates sufficient funds in the account for the requested withdrawal', () => {
      expect(() => { account.withdraw(10); }).toThrowError('Insufficient funds in account for requested withdrawal');
    });
  });

  describe('Account statement:', () => {
  });
});
