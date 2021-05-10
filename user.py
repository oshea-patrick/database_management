class User:
  
    def __init__(self, fname, lname, email, password):
        self.first_name = fname
        self.last_name = lname
        self.email = email
        self.password = password

    def dictify(self):
        return {
            'email' : self.email,
            'first_name' : self.first_name,
            'last_name' : self.last_name,
            'password' : self.password
        }
    def adapt(self, li):
        self.email = li[0]
        self.first_name = li[1]
        self.last_name = li[2]
        self.password = li[3]