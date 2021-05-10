class Check:
  
    def __init__(self, item_name, location, email):
        self.item_name = item_name
        self.location = location
        self.email = email

    def dictify(self):
        return {
            'item_name' : self.item_name,
            'location' : self.location,
            'email' : self.email
        }
    def adapt(self, li):
        self.item_name = li[0]
        self.location = li[1]
        self.email = li[2]