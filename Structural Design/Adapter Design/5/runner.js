const thirdPartyUser = {
    userId: 101,
    user_name: "Alice",
    user_email: "alice@example.com",
  };
  
  const expectedUser = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
  };

  class UserAdapter {
    constructor(thirdPartyUser){
        return {
            id: thirdPartyUser.userId,
            name: thirdPartyUser.user_name,
            email: thirdPartyUser.user_email,
        }
    }
  }
  
  // Usage
  const adaptedUser = new UserAdapter(thirdPartyUser);
  console.log(adaptedUser); // Should print the expected format