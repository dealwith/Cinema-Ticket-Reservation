export const userServices = {
  login,
  // logout
};

const login = (email, password) => {
  const user = {
    email,
    password
  }
  axios
    .post("http://localhost:3000/login", user)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
    .catch(err => console.log(err));
};

export const logout1 = () => localStorage.removeItem("user");
