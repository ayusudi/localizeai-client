import axios from "axios";


export default async function fetchDetail(id) {
  try {
    let { data } = await axios.get("https://localizeai-server-da6245e547aa.herokuapp.com/cafes/" + id)
    return data
  } catch (error) {
    console.log(error);
  }
}