const db = require("./database");

const createCustomer = async (customer) => {
  const { first_name, last_name, email, phone_number, address } = customer;
  const query =
    "INSERT INTO Customers (first_name, last_name, email, phone_number, address) VALUES ($1, $2, $3, $4, $5)";
  await db.query(query, [first_name, last_name, email, phone_number, address]);
};

const readCustomers = async () => {
  const query = "SELECT * FROM Customers";
  const { rows } = await db.query(query);
  return rows;
};

const updateCustomer = async (customer) => {
  const { customer_id, first_name, last_name, email, phone_number, address } =
    customer;
  const query =
    "UPDATE Customers SET first_name = $1, last_name = $2, email = $3, phone_number = $4, address = $5 WHERE customer_id = $6";
  await db.query(query, [
    first_name,
    last_name,
    email,
    phone_number,
    address,
    customer_id,
  ]);
};

const deleteCustomer = async (customer_id) => {
  const query = "DELETE FROM Customers WHERE customer_id = $1";
  await db.query(query, [customer_id]);
};

const deleteall = async () => {
  const query = "DELETE FROM Customers";
  await db.query(query);
};
// Add other CRUD functions here

// Implement updateCustomer and deleteCustomer functions similarly

module.exports = {
  createCustomer,
  readCustomers,
  updateCustomer,
  deleteCustomer,
  deleteall,
  // Add other CRUD functions here
};
