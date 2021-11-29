from flask import Flask, jsonify
from flask_cors import CORS
import requests, base64
from init import Config
import json

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
cg = Config()


@app.route('/api/ticket/all',methods=['GET'])
def get_all_tickets():
    u_name = cg.data.get('username')
    u_password = cg.data.get('password')
    baseUrl = cg.data.get('base_url') +'incremental/' + "tickets/" +"cursor.json?cursor=MTU3NjYxMzUzOS4wfHw0Njd8"
    userpass = u_name + ':' + u_password
    encoded_u = base64.b64encode(userpass.encode()).decode()
    r=requests.get(baseUrl, headers={"Authorization": "Basic %s" % encoded_u})
    zendesk_data = json.loads(r.text)
    
    #return jsonify(tickets=zendesk_data.get('tickets')),200
    
    #return zendesk_data.get('tickets')

    # response = app.response_class(
    #     response=json.dumps(zendesk_data.get('tickets')),
    #     status=200,
    #     mimetype='application/json'
    # )

    return jsonify(zendesk_data.get('tickets'))
    #return response

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