let array = [1, 2, 3, 4, 5];

export default {
	'/handler/': function({get}) {
		return array[get.num];
	}
}