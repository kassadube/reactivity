function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export function apiFetch(path, options) {
  const host = `${process.env.APP_HOST}:${process.env.APP_PORT}`
  const contextHost = (process.env.SERVER && host) || ''
  const apiUrl = `${contextHost}/api${path}&api_key=${process.env.API_KEY}`

  return fetch(apiUrl, options)
    .then(checkStatus)
    .then(parseJSON)
}
