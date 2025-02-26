import { prevUser } from "./context/UserContext";

export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxx",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}