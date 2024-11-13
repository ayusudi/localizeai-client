import axios from "axios";
export async function uploadFile(folder, file) {
  try {
    let { data } = await axios({
      method: "GET",
      url: import.meta.env.VITE_BASEURL + "/api/v1/storages/presign",
      params: {
        file_name: "image",
        folder
      }
    })
    let { upload_url, download_url } = data
    await axios({
      method: "PUT",
      url: upload_url,
      data: file,
      maxBodyLength: Infinity,
    })
    return download_url
  } catch (error) {
    console.log(error);

  }
}