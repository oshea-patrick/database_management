class Sign:
  
    def __init__(self, email, time_block, location_name, address):
        self.email = email
        self.time_block = time_block
        self.location_name = location_name
        self.address = address

    def dictify(self):
        return {
            'email' : self.email,
            'time_block' : self.time_block,
            'location_name' : self.location_name,
            'address' : self.address
        }
    def adapt(self, li):
        self.email = li[0]
        self.time_block = li[1]
        self.location_name = li[2]
        self.address = li[3]