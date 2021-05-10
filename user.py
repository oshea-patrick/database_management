class User:
  
    def __init__(self, email, first_name, last_name, password):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
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