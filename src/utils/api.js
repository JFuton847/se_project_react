const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Error ${res.status}: $res.statusText}`));
  }
  return res.json();
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItems(itemData) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: itemData.name,
      imageUrl: itemData.imageUrl,
      weather: itemData.weather,
    }),
  }).then(checkResponse);
}

function deleteItems(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItems, deleteItems };
