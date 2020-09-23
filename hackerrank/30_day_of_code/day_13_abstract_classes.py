class MyBook(Book):
    def __init__(self, t, a, p):
        super()
        self.title = t
        self.author = a
        self.price = p

    def display(self):
        print(
            f"Title: {self.title}\nAuthor: {self.author}\nPrice: {self.price}")
