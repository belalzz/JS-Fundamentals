const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)){
	console.log("Missing size");
}else{
	let arr = "";
	for (let i = 0; i < num; i++){
		arr += "X";
	}
	for (let i = 0; i < num; i++){
		console.log(arr);
	}
}
