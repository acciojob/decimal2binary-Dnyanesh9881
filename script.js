function decimalToBinary(num) {
    let decimal="";
      while (num>=1) {
          decimal=decimal+num%2;
          num=Math.floor(num/2);
      }
      let binarystr="";
    for(let i=decimal.length-1;i>=0;i--){
binarystr+=decimal.charAt(i);
    }
      return binarystr;
}

window.decimalToBinary = decimalToBinary;
