const user = JSON.parse(
    localStorage.getItem("admin") || sessionStorage.getItem("admin") || "{}"
  );
  
  export const reLogin = (state = user, action) => {
    switch (action.type) {
      case "ADMIN":
        return action.payload;
      default:
        return state;
    }
  };
  
  export const acLogin = (user) => ({
    type: "ADMIN",
    payload: user,
  });