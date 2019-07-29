class Authentication {
  setLoginSession = login => {
    sessionStorage.setItem("AuthenticatedUser", login);
  };

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedin = () => {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) {
      return false;
    } else {
      return true;
    }
  };
}

export default new Authentication();
