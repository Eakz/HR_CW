// https://www.codewars.com/kata/58e2bce4541906541c000052/train/javascript

function pizzaCompare(menu) {
    const getPricePerInch = (obj) =>(400 * (obj.price - (obj.coupon || 0)) / (Math.PI*obj.diameter**2)) | 0;
    const sizeOfBestDeal = menu.reduce((a, b) => {
        const res1=getPricePerInch(a)
        const res2=getPricePerInch(b)
        return (res1-res2||a.diameter-b.diameter)>0?b:a
    })
    return "The best deal is the " + sizeOfBestDeal.size + "!";
}


console.log(pizzaCompare(
    [{ size: "extra large", diameter: 14, price: 21.35 },
    { size: "large", diameter: 12, price: 18.56 },
    { size: "medium", diameter: 10, price: 15.08, coupon: 4.50 },
    { size: "small", diameter: 8, price: 12.06 }
    ]), "The best deal is the medium!")

console.log(pizzaCompare(
    [{ size: 'small', diameter: 8, price: 10.06, coupon: 3 },
    { size: 'large', diameter: 10, price: 14, coupon: 2 },
    { size: 'gut buster', diameter: 17, price: 24.17 },
    { size: 'princess', diameter: 6, price: 10.06, coupon: 5 },
    { size: 'medium', diameter: 10, price: 14.15, coupon: 5 },
    { size: 'triple dog dare', diameter: 19, price: 32.17 }
    ]), "The best deal is the gut buster!")
console.log(pizzaCompare(
    [{ size: 'media', diameter: 10.5, price: 10.66 },
    { size: 'grande', diameter: 14, price: 17.76, coupon: 2 },
    { size: 'piccola', diameter: 8.3, price: 7.99, coupon: 2.50 },
    { size: 'gigante', diameter: 16, price: 21.12 }
    ]), "The best deal is the piccola!");