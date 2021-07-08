import axios from 'axios'
import { baseUrl } from '../config'


import { getToken, getUserId } from './auth'

// const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllRunaways() {
  return axios.get(`${baseUrl}/runaways/`)
}

// export function getPlacesWithFiveStars() {
//   return axios.get(`${baseUrl}/places/search?rating=5`)
// }

export function getSingleRunaway(RunId) {
  return axios.get(`${baseUrl}/runaways/${RunId}`)
}

// export function editRunaway(placeId, formData) {
//   return axios.put(`${baseUrl}/places/${placeId}`, formData, headers())
// }

export function deleteRunaway(id) {
  return axios.delete(`${baseUrl}/runaways/${id}`, headers())
}

export function addFav(id){
  return axios.post(`${baseUrl}/runaways/${id}/favorite/`, null,  headers())
}
export function removeFav(id){
  return axios.post(`${baseUrl}/runaways/${id}/favorite/`, null,  headers())
}
export function checkFav(id){
  return axios.get(`${baseUrl}/favorite/${id}/`, headers())
}
export function showMyFavs(){
  return axios.get(`${baseUrl}/favorite/`, headers())
}

export function createComment(formData, runId) {
  return axios.post(`${baseUrl}/places/${runId}/review/`, formData, headers())

}
export function getUserProfile(){
  return axios.get(`${baseUrl}/auth/profile/${getUserId()}/`, headers())
}

export function addRent(runId, formData){
  return axios.post(`${baseUrl}/runaways/${runId}/rent/`, formData, headers())
}
export function addBuy(runId, formData){
  return axios.post(`${baseUrl}/runaways/${runId}/purchase/`, formData, headers())
}