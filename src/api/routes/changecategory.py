from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Rol, Profile
from flask_jwt_extended import get_jwt_identity, jwt_required

changecategory = Blueprint('changecategory', __name__)

@changecategory.route('/category', methods=['PUT'])
@jwt_required()
def change_category():
    currentId = get_jwt_identity()
    currentRol = Rol.query.get(currentId)

    currentRol.cliente = request.json.get('cliente')
    currentRol.profesor = request.json.get('profesor')
    currentRol.update()

    return jsonify({"status": "success", "message": "Role changed", "data": currentRol.serialize()}), 201