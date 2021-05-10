class Item:
  
    def __init__(self, name, location, stock:
        self.name = name
        self.location = location
        self.stock = stock

    def dictify(self):
        return {
            'name' : self.name,
            'location' : self.location,
            'stock' : self.stock
        }
    def adapt(self, li):
        self.name = li[0]
        self.location = li[1]
        self.stock = li[2]