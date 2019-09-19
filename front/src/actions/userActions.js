import { userConstants } from "../constants/userConstants";
import { alertActions } from "../actions/alertActions";
import { userServices, logout1 } from "../services/userServices";
import { history } from "../helpers/history";


export const userActions = {
  login,
  // logout
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));

    userServices.login(email, password)
      .then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error);
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  debugger;
  // logout1();
  localStorage.removeItem("user")
  return { type: userConstants.LOGOUT };
}
