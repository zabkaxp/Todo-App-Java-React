let user = sessionStorage.getItem("authenticatedUser");

class Authentication {
  setLoginSession = login => {
    sessionStorage.setItem("authenticatedUser", login);
  };

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    window.location.reload();
  }

  isUserLoggedin() {
    if (user === null) return false;

    return true;
  }

  getUsername = () => {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) {
      return "";
    } else {
      return user;
    }
  };
}

export default new Authentication();
