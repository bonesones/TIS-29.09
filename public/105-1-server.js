export default {
	'/handler/': function({post}) {
        let result = 0;
		for(let item of Object.values(post)){
            result += Number(item);
        }
        result /= Object.keys(post).length;
        console.log(result);
		return "Среднее арифметическое " + result;
	}
}