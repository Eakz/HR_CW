// https://www.codewars.com/kata/59de1e2fe50813a046000124/train/javascript

function change(s, prog, version) {
    let sbrow=s.split('\n');
    sbrow[0]=`Program: ${prog}`;
    sbrow[1]=`Author: g964`;
    const isPhoneValid = new RegExp(/\+1-\d{3}-\d{3}-\d{4}/)
    const isVersionValid=new RegExp(/^\d+\.\d+$/)
    if(isPhoneValid.test(sbrow[3].split(' ')[1])&&isVersionValid.test(sbrow[5].split(' ')[1])){
        sbrow[2]='Phone: +1-503-555-0090'
        sbrow[3]="Date: 2019-01-01"
        sbrow[4]=`Version: ${sbrow[5].split(' ')[1]==="2.0"?sbrow[5].split(' ')[1]:version}`
    }else{
        return "ERROR: VERSION or PHONE"
    }
    return sbrow.slice(0,5).join(' ')
  }

const s1 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha'
const s11 = 'Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release'
const s12 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha'

console.log(change(s1, 'Ladder', '1.1'), 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1')
console.log(change(s11, 'Balance', '1.5.6'), 'Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0')
console.log(change(s12, 'Ladder', '1.1'), 'ERROR: VERSION or PHONE')
