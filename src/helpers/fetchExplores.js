import axios from "axios"

export default async function fetchExplore() {
	try {
		let { data } = await axios.get("https://localizeai-server-da6245e547aa.herokuapp.com/cafes")
		return data.explores
	} catch (error) {
		console.log(error);
	}
}