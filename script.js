function decimalToBinary(num) {
  let decimal=0;
	while (num>=1) {
		decimal=decimal*10+num%2;
		num=Math.floor(num/2);
	}
	return decimal;
}

window.decimalToBinary = decimalToBinary;
