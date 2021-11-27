import json
import os

class Config:
    def __init__(self):
      self.data = None
      self.get_config()

    def get_config(self):
        try:
            self.data = json.load(open("config.json"))
        except Exception as e:
            print(e)
            raise("Exception Occured , Config file not found")
        
