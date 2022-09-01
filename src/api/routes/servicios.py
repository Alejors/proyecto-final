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

@servicios.route('/services/individual', methods=['POST'])
def create_individual():
    data = request.get_json()

    if not data['nameIndividual']: return jsonify({"status": "failed", "message": "Se necesita un título para la clase", "data": None}), 400
    if not data['descriptionIndividual']: return jsonify({"status": "failed", "message": "Se necesita una descripción para la clase", "data": None}), 400
    if not data['especificationIndividual']: return jsonify({"status": "failed", "message": "Se necesita explicar que es lo que contiene la clase", "data": None}), 400
    if not data['urlmediaIndividual']: return jsonify({"status": "failed", "message": "Se debe adjuntar la url de la clase", "data": None}), 400

    individual = Individual()
    individual.name = data['nameIndividual']
    individual.description = data['descriptionIndividual']
    individual.especification = data['especificationIndividual']
    individual.urlmedia = data['urlmediaIndividual']

    service = Service()
    individual.services_id = data['services_idIndividual']

    user = User()
    individual.users_id = "null"

    individual.save()

    data = individual.serialize()
    return jsonify({"status" : "Clase creada exitosamente", "data" : data}), 200