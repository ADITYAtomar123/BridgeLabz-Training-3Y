// Q7. Banking Application (Private Fields + Error Handling)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log(`Rs. ${amount} deposited successfully.`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal cannot be completed.");
        }

        this.#balance -= amount;
        console.log(`Rs. ${amount} withdrawn successfully.`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

account.deposit(2000);

try {
    account.withdraw(1500);
    account.withdraw(10000); // This withdrawal is invalid.
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Available balance: Rs.", account.getBalance());

// account.#balance cannot be accessed directly because it is private.
