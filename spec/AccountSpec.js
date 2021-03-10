/* eslint-disable no-new */
/* eslint-disable no-undef */

describe('Account', () => {
  let account;
  let transaction;

  beforeEach(() => {
    account = new Account();
    transaction = new Transaction(100, '01/01/2020');
  });

  describe('General behaviour/attributes', () => {
    it('is an instance of the Account class', () => {
      expect(account).toBeInstanceOf(Account);
    });

    it('has an account balance of 0 when opened', () => {
      expect(account.balance()).toEqual(0);
    });

    it('keeps a transaction record of all deposts and withdrawals', () => {
      account.process(new Transaction(10));
      account.process(new Transaction(5));
      expect(account.transactions().length).toEqual(2);
    });

    it('can output an account statement on request', () => {
      account.process(new Transaction(1000, '10/01/2012'));
      account.process(new Transaction(2000, '13/01/2012'));
      account.process(new Transaction(-500, '14/01/2012'));
      account.printAccountStatement();
      expect(account.printAccountStatement()).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00\n');
    });
  });

  describe('Processing transactions', () => {
    it('it updates the account balance with the transaction value', () => {
      account.process(transaction);
      expect(account.balance()).toEqual(100);
    });
    it('validates sufficient funds in the account when a withdrawal is requested', () => {
      expect(() => { account.process(new Transaction(-10)); }).toThrowError('Insufficient funds in account for requested withdrawal');
    });
  });
});
