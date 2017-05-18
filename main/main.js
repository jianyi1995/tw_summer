module.exports = function main(s) {
	var number = parseInt(s)
	var res = 0
	while(number > 0)
	{
		res += number % 10
		number /= 10
	}
	return res
};