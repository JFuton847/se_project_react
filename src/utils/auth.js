const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Error ${res.status}: ${res.statusText}`));
  }
  return res.json();
}

function signup(userData) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      avatar: userData.avatarUrl,
      email: userData.email,
      password: userData.password,
    }),
  }).then(checkResponse);
}

function signin(userData) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userData.email,
      password: userData.password,
    }),
  })
    .then((res) => {
      console.log("Signin Response:", res);
      return checkResponse(res);
    })
    .catch((err) => {
      console.error("Signin Error:", err);
      throw err;
    });
}

function getCurrentUser() {
  const token = localStorage.getItem("jwt");

  if (!token) {
    return Promise.reject(new Error("No token found"));
  }

  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { signup, signin, checkResponse, getCurrentUser };
