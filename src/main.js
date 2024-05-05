const {
  createCustomer,
  readCustomers,
  updateCustomer,
  deleteCustomer,
  deleteall,
} = require("./customer");

const run = async () => {
  // Example usage
  //deleting all customers previously
  await deleteall();

  // creating 5 customers
  await createCustomer({
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone_number: "1234567890",
    address: "123 Main St",
  });

  await createCustomer({
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@example.com",
    phone_number: "0987654321",
    address: "456 Park Ave",
  });

  await createCustomer({
    first_name: "Bob",
    last_name: "Smith",
    email: "bob@example.com",
    phone_number: "5555555555",
    address: "789 Elm St",
  });
  await createCustomer({
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice@example.com",
    phone_number: "4444444444",
    address: "321 Oak St",
  });
  
  await createCustomer({
    first_name: "Mark",
    last_name: "Davis",
    email: "mark@example.com",
    phone_number: "1111111111",
    address: "987 Pine St",
  });
  
  const customers = await readCustomers();
  console.log("All Customers:", customers);

  // deleting bob
  await deleteCustomer(2);

  const customers1 = await readCustomers();
  console.log("current Customers:", customers1);

  // updating alice
  await updateCustomer({
    customer_id: 3,
    first_name: "Alice",
    last_name: "Davis",
    email: "alice@example.com",
    phone_number: "4444444444",
    address: "321 Oak St",
  });
  const customers2 = await readCustomers();
  console.log("current Customers:", customers2);

};

run();

// adding crud to it

run().catch(console.error);
