from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol, Profile
from flask_jwt_extended import get_jwt_identity, jwt_required

infoupdate = Blueprint('infoupdate', __name__)

@infoupdate.route('/update', methods=['PUT'])
@jwt_required()
def update_user():
    currentId = get_jwt_identity()
    currentUser = User.query.get(currentId)

    inputtedName = request.json.get('name')
    inputtedLastname = request.json.get('lastname')
    inputtedEmail = request.json.get('email')
    inputtedPhonenumber = request.json.get('phonenumber')
    inputtedFacebook = request.json.get('facebook')
    inputtedInstagram = request.json.get('instagram')
    inputtedTwitter = request.json.get('twitter')
    inputtedLinkedin = request.json.get('linkedin')

    currentUser.profile.name = currentUser.profile.name if inputtedName is None else inputtedName
    currentUser.profile.lastname = currentUser.profile.lastname if inputtedLastname is None else inputtedLastname
    currentUser.email = currentUser.email if inputtedEmail is None else inputtedEmail
    currentUser.profile.phonenumber = currentUser.profile.phonenumber if inputtedPhonenumber is None else inputtedPhonenumber
    currentUser.profile.facebook = currentUser.profile.facebook if inputtedFacebook is None else inputtedFacebook
    currentUser.profile.instagram = currentUser.profile.instagram if inputtedInstagram is None else inputtedInstagram
    currentUser.profile.twitter = currentUser.profile.twitter if inputtedTwitter is None else inputtedTwitter
    currentUser.profile.linkedin = currentUser.profile.linkedin if inputtedLinkedin is None else inputtedLinkedin

    currentUser.update()

    return jsonify({"status": "success", "message": "Information updated", "data": None}), 200