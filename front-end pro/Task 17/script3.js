class BankAccount {
    constructor(initialBalance) {
      this._validateAmount(initialBalance);
      this.balance = initialBalance;
    }
  
    getBalance = () => {
      return this.balance;
    };
  
    deposit = (amount) => {
      this._validateAmount(amount);
      this.balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    };
  
    withdraw = (amount) => {
      this._validateAmount(amount);
      if (amount > this.balance) {
        throw new Error("Недостатньо коштів на рахунку");
      }
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
    };
  
    _validateAmount = (amount) => {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Сума повинна бути числом більше нуля");
      }
    };
  }
  
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance());
  account1.deposit(500);
  console.log(account1.getBalance());
  account1.withdraw(200);
  console.log(account1.getBalance());
  
  try {
    account1.withdraw(2000);
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    account1.deposit(-100);
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const account2 = new BankAccount(-500);
  } catch (error) {
    console.error(error.message);
  }