import axios from "axios";


export default async function fetchDetail(id) {
  try {
    let { data } = await axios.get(import.meta.env.VITE_BASEURL + "/api/v1/places/" + id)
    return data
  } catch (error) {
    console.log(error);
  }
}