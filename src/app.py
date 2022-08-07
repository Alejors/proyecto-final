from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from api.models import db
from api.routes.routes import api
from api.routes.infoupdate import infoupdate
from api.routes.login import login

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['JSON_SORT_KEYS'] = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///databasefinalproyect.db'
app.config['JWT_SECRET_KEY'] = 'secret-key'

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(api, url_prefix='/api')
app.register_blueprint(infoupdate, url_prefix='/api')
app.register_blueprint(login, url_prefix='/api')

@app.route('/')
def root():
    return jsonify({ "message": "API REST FLASK" }), 200

if __name__ == '__main__':
    app.run()