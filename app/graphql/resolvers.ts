const createUser = (parent, { input }, context) => {
  // Here you can write the logic to create a new user in your data source (e.g., database).
  // You can access the input values like input.name and input.email.

  // Sample implementation for demonstration purposes:
  const newUser = {
    id: '1', // Generate a unique ID
    name: input.name,
    email: input.email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Assuming you have an array to store users:
  context.users.push(newUser);

  return newUser;
};

module.exports = {
  Mutation: {
    createUser,
  },
};