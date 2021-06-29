// https://www.codewars.com/kata/582b59f45ad9526ae6000249/train/javascript

const phoneNumber = (phoneNumbers) => {
    const keys = phoneNumbers.reduce((acc, numbers) => {
      const arr = [...numbers].reduce((acc, number) => {
        const key = acc[acc.length - 1] || ''
        acc.push(key + number)
        return acc
      }, [])
  
      acc.push(...arr)
      return acc
    }, [])
  
    return new Set(keys).size
  }

  describe("Example tests", function(){
    var tests = [
      [['0','1'],2],
      [['01','02','03'],4],
      [['012','0123','01234'],5],
      [['0123456789','0123987654','0123987456','2365498756','2365498765'],31]
    ];
    
    tests.forEach(a=>{
      it(`Should equal ${a[1]}`, () => {
          Test.assertEquals(phoneNumber(a[0]),a[1]);
      });
    });
});