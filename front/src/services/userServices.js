import axios from 'axios';

export const userServices = {
  login,
  logout
};

function login(email, password)  {
  const user = {
    email,
    password
  }
  return axios
    .post("http://localhost:3000/login", user)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
    .catch(err => console.log(err));
};

function logout () {
  return localStorage.removeItem('user')
}

// const logout = () => localStorage.removeItem("user");

// const registrate = (email, password) => {
  
// }