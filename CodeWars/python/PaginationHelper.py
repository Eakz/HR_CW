# TODO: complete this class

class PaginationHelper:

    # The constructor takes in an array of items and a integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page

    # returns the number of items within the entire collection
    def item_count(self):
        return len(self.collection)

    # returns the number of pages
    def page_count(self):
        frac = len(self.collection) //self.items_per_page
        module = len(self.collection) % self.items_per_page
        return int(frac) if module == 0 else int(frac) + 1

    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        max_index = (self.page_count() - 1) if self.page_count()!=0 else 0
        if page_index > max_index or page_index < 0:
            return -1
        else:
            return self.items_per_page if page_index in range(0, max_index) else len(
                self.collection) % self.items_per_page

    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if item_index in range(0,len(self.collection)):
            return item_index//self.items_per_page

        else:
            return -1

