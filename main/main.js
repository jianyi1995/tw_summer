module.exports = function main(s) {
	var number = parseInt(s)
	var res = 0
	while(number != 0)
	{
		res += number % 10
		number = (number - number % 10) / 10
	}
	return res
};