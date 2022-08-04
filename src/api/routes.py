"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol

api = Blueprint('api', __name__)


@api.route('/listausers', methods=['GET']) 
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

@api.route('/users', methods=['POST']) 
def create_users():
    data = request.get_json()
    user = User()
    user.email = data['email']
    user.password = data['password']
    rol = Rol()
    user.rol = rol    
    user.save()
    return jsonify(user.serialize()), 201
