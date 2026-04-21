import React, { useState } from "react";

function TransactionManager() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("Credit");
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !budget) {
      alert("Please fill in both Name and Budget");
      return;
    }

    const newEntry = {
      id: Date.now(),
      userName: name,
      amount: budget,
      transactionType: type,
    };

    setTransactions([...transactions, newEntry]);
    setName("");
    setBudget("");
  };

  const deleteTransaction = (id) => {
    const updatedList = transactions.filter((item) => item.id !== id);
    setTransactions(updatedList);
  };

  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <h3>Transaction Portal</h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Budget (Rs.)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
        <button type="submit">Submit Transaction</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <div style={{ marginTop: "20px" }}>
        <h4>Transaction History:</h4>
        {transactions.length === 0 ? (
          <p>No transactions recorded yet.</p>
        ) : (
          <ul style={{ padding: "0 0 0 20px" }}>
            {transactions.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px", listStyleType: "none" }}>
                <div>
                  <strong>User:</strong> {item.userName} |{" "}
                  <strong>Amount:</strong> Rs. {item.amount}
                  <p style={{ margin: "5px 0 0 0" }}>
                    {item.transactionType === "Credit"
                      ? `Credited to account`
                      : `Debited from account`}
                  </p>
                </div>
                <button
                  onClick={() => deleteTransaction(item.id)}
                  style={{ marginTop: "8px" }}
                >
                  Delete
                </button>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TransactionManager;
