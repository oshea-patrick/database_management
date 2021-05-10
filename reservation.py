class Reservation:
  
    def __init__(self, location, time_block, spots_available):
        self.location = location
        self.time_block = time_block
        self.spots_available = spots_available

    def dictify(self):
        return {
            'location' : self.location,
            'time_block' : self.time_block,
            'spots_available' : self.spots_available
        }
    def adapt(self, li):
        self.location = li[0]
        self.time_block = li[1]
        self.spots_available = li[2]