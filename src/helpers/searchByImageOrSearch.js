import axios from "axios";


export default async function searchByImageOrSearch(data) {
  try {
    let response = await axios({
      method: "GET",
      url: "https://llm.localizeai.online/v1/places",
      params: { ...data }
    });
    return response.data.data
  } catch (error) {
  }
}

