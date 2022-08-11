from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol, Profile, Service, Individual
from flask_jwt_extended import get_jwt_identity, jwt_required

servicios = Blueprint('servicios', __name__)

@servicios.route('/allservices', methods=['GET'])
def get_servicios():
    servicios = Service.query.all()
    servicios = list(map(lambda service: service.serialize(), servicios))
    return jsonify(servicios), 200

@servicios.route('/allservices/individuals', methods=['GET'])
def get_individuals():
    individuals = Individual.query.all()
    individuals = list(map(lambda individual: individual.serialize(), individuals))
    return jsonify(individuals), 200