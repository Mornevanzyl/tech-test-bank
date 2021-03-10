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

    it('can output an account statement on request', () => {
      account.deposit(1000, '10/01/2012');
      account.deposit(2000, '13/01/2012');
      account.withdraw(500, '14/01/2012');
      expect(account.printAccountStatement()).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00\n');
    });
  });

  describe('Deposits:', () => {
    it('accepts only valid numerics for deposit amounts', () => {
      expect(() => { account.deposit('ten'); }).toThrowError('Invalid input: Only valid numbers are accepted');
    });

    it('accepts both numbers and strings with a maximum of 2 decimal places', () => {
      expect(() => { account.deposit(10.001); }).toThrowError('Invalid input: Only numbers with maximum 2 decimal places are allowed');
    });

    it('has the facility to deposit money into the account', () => {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });

    it('only accepts positive amounts for deposits', () => {
      expect(() => { account.deposit(-10); }).toThrowError('Only positive values are accepted for deposits');
    });

    it('can accept an optional transaction date', () => {
      account.deposit(1000, '10/01/2012');
      expect(account.transactions()[0][0]).toEqual('10/01/2012');
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

    it('can accept an optional transaction date', () => {
      account.deposit(500, '14/01/2012');
      expect(account.transactions()[0][0]).toEqual('14/01/2012');
    });
  });

  describe('Account statement:', () => {
  });
});
