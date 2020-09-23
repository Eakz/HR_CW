class MyBook extends Book {
    constructor(title, author, price) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }
    display() {
        console.log(
            `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`,
        );
    }
}
