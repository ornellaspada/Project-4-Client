export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getUserId(){
  return getPayload().sub
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  window.localStorage.removeItem('token')
}

function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(userId) {
  const payload = getPayload()
  if (!isAuthenticated()) return false
  return payload.sub === userId
}
