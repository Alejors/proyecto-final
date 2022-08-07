from flask import Blueprint, jsonify, request
from api.models import db, User, Rol, Profile
from flask_jwt_extended import get_jwt_identity, jwt_required, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

login = Blueprint('login', __name__)

@login.route('/login', methods=['POST'])
def login_user():

    inputtedEmail = request.json.get('email')
    inputtedPassword = request.json.get('password')

    if not inputtedEmail: return jsonify({"status": "failed", "message": "Input your email", "data": None}), 400
    if not inputtedPassword: return jsonify({"status": "failed", "message": "Input you password", "data": None}), 400

    userExists = User.query.filter_by(email = inputtedEmail).first()
    if not userExists: return jsonify({"status": "failed", "message": "Wrong email/password.", "data": None}), 401
    if not check_password_hash(userExists.password, inputtedPassword): return jsonify({"status": "failed", "message": "Wrong email/password", "data": None}), 401

    token_expiration = datetime.timedelta(days=1)

    new_access_token = create_access_token(identity = userExists.id, expires_delta = token_expiration)

    loginData = {"access_token": new_access_token, "user": userExists.serialize()}

    return jsonify({"status": "success", "message": "Login succesful.", "data": loginData}), 200