import axios from "axios"

export default async function fetchExplore() {
	try {
		let { data } = await axios.get(import.meta.env.VITE_BASEURL + "/api/v1/places/explores")
		console.log(data);
		return data

	} catch (error) {
		console.log(error);
	}
}