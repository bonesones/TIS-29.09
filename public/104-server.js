export default {
	'/handler/': function({get}) {
		return Number(get.num1) + Number(get.num2) + Number(get.num3);
	}
}