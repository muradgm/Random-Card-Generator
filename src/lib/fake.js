const avatars = {
	avatar: require("./avatars/avatar1.png"),
	avatar2: require("./avatars/avatar2.png"),
	avatar3: require("./avatars/avatar3.png"),
	avatar4: require("./avatars/avatar4.png"),
	avatar5: require("./avatars/avatar5.png"),
	avatar6: require("./avatars/avatar6.png"),
	avatar7: require("./avatars/avatar7.png"),
	avatar8: require("./avatars/avatar8.png"),
	avatar9: require("./avatars/avatar9.png"),
	avatar10: require("./avatars/avatar10.png"),
	avatar11: require("./avatars/avatar11.png"),
	avatar12: require("./avatars/avatar12.png"),
	avatar13: require("./avatars/avatar13.png"),
	avatar14: require("./avatars/avatar14.png"),
};

export default function generateFakeData() {
	const data = [];
	let randomName = "";
	let randomCity = "";
	let randomEmail = "";
	let randomAvatar = "";
	let randomTel = "+";
	let names = ["Michael", "John", "Jay", "Bob", "Ronny", "James"];
	let last = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Wilson"];
	let cities = ["Dubai", "London", "New York", "Berlin", "Paris", "Istanbul"];
	let at = ["@gmail.com", "@hotmail.com", "@yahoo.com", "@hubspot.net"];
	let code = [491, 971, 441, 331, 901];
	let randomNum = Math.floor(Math.random() * 900000000) + 100000000;

	for (let i = 1; i < 25; i++) {
		randomName =
			names[Math.floor(Math.random() * names.length)] +
			" " +
			last[Math.floor(Math.random() * names.length)];

		randomCity = cities[Math.floor(Math.random() * names.length)];

		randomEmail =
			randomName.toLowerCase().charAt(0) +
			last[Math.floor(Math.random() * names.length)].toLowerCase() +
			at[Math.floor(Math.random() * at.length)];

		randomTel =
			"+" + code[Math.floor(Math.random() * code.length)] + " " + randomNum;
		// console.log('random number', );

		randomAvatar =
			avatars[
				Object.keys(avatars)[
					Math.floor(Math.random() * Object.keys(avatars).length)
				]
			];

		console.log(randomTel);
		data.push({
			id: i,
			avatar: randomAvatar,
			name: randomName,
			city: randomCity,
			email: randomEmail,
			telephone: randomTel,
		});
	}
	return data;
}

let fakeData = generateFakeData();
// console.log(fakeData);

export function tableHeader(str) {
	let header = Object.keys(str[0]);
	return header.map((key) => {
		return key.toUpperCase();
	});
}
// console.log(tableHeader(fakeData));

export function tableData(data) {
	return data.map((value, i) => {
		const { id, name, city, email } = value;
		// console.log(value);

		return [id, name, city, email];
	});
}
console.log(tableData(fakeData));
