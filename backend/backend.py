from flask import Flask
import requests, base64
from init import Config 

app = Flask(__name__)
cg = Config()

@app.route('/ticket/all',methods=['GET'])
def get_all_tickets():
    u_name = cg.data.get('username')
    u_password = cg.data.get('password')
    baseUrl = cg.data.get('base_url') + "tickets.json?page[size]=10"
    userpass = u_name + ':' + u_password
    encoded_u = base64.b64encode(userpass.encode()).decode()
    r=requests.get(baseUrl, headers={"Authorization": "Basic %s" % encoded_u})
    return r.json()

@app.route('/ticket/<id>')
def get_all_tickets1(id):
    a = id
    u_name = cg.data.get('username')
    u_password = cg.data.get('password')
    baseUrl = cg.data.get('base_url') + "tickets" +"/" + id
    userpass = u_name + ':' + u_password
    encoded_u = base64.b64encode(userpass.encode()).decode()
    r=requests.get(baseUrl, headers={"Authorization": "Basic %s" % encoded_u})
    return r.json()

if __name__ == '__main__':
    
    app.debug = True
    app.run()
    app.run(debug = True)