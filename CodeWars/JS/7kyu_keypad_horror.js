// https://www.codewars.com/kata/5572392fee5b0180480001ae/train

function computerToPhone(numbers){
    const comp='0789456123'
    return [...numbers].map(n=>comp[n]).join('')
  }



  console.log(computerToPhone("0789456123"), "0123456789")
  console.log(computerToPhone("000"), "000")
  console.log(computerToPhone("94561"), "34567")
  console.log(computerToPhone(""), "")

  

