// Função com multi tipos

function callToPhone(phone: number | string): any {
  return phone;
}

console.log(callToPhone(12231246));
console.log(callToPhone("1231251"));