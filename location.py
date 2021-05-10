class Location:
  
    def __init__(self, name, address):
        self.name = name
        self.address = address

    def dictify(self):
        return {
            'name' : self.name,
            'address' : self.address
        }
    def adapt(self, li):
        self.name = li[0]
        self.address = li[1]