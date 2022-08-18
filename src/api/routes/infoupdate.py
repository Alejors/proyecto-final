from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Rol, Profile
from flask_jwt_extended import get_jwt_identity, jwt_required
import cloudinary
import cloudinary.uploader
import cloudinary.api
import random
from werkzeug.security import generate_password_hash
from smtplib import SMTP 

cloudinary.config(
    cloud_name = "alejors",
    api_key = "273489797331588",
    api_secret = "zcdYZLz0YkZQmabr69IxUUXdgcU",
    secure = True
)

infoupdate = Blueprint('infoupdate', __name__)

@infoupdate.route('/update', methods=['PUT'])
@jwt_required()
def update_user():
    currentId = get_jwt_identity()
    currentUser = User.query.get(currentId)

    inputtedName = request.form['name']
    inputtedLastname = request.form['lastname']
    inputtedEmail = request.form['email']
    inputtedPhonenumber = request.form['phonenumber']
    inputtedFacebook = request.form['facebook']
    inputtedInstagram = request.form['instagram']
    inputtedTwitter = request.form['twitter']
    inputtedLinkedin = request.form['linkedin']
    if 'picture' in request.files:
        inputtedPicture = request.files['picture']
    
        if inputtedPicture != '':
        
            pictureResponse = cloudinary.uploader.upload(inputtedPicture, folder = "proyect-avatars")
            if not pictureResponse: jsonify({"status": "failed", "message": "Uploading error.", "data": None}), 400
            currentUser.profile.picture = pictureResponse["secure_url"]

    currentUser.profile.name = currentUser.profile.name if inputtedName is None else inputtedName
    currentUser.profile.lastname = currentUser.profile.lastname if inputtedLastname is None else inputtedLastname
    currentUser.email = currentUser.email if inputtedEmail is None else inputtedEmail
    currentUser.profile.phonenumber = currentUser.profile.phonenumber if inputtedPhonenumber is None else inputtedPhonenumber
    currentUser.profile.facebook = currentUser.profile.facebook if inputtedFacebook is None else inputtedFacebook
    currentUser.profile.instagram = currentUser.profile.instagram if inputtedInstagram is None else inputtedInstagram
    currentUser.profile.twitter = currentUser.profile.twitter if inputtedTwitter is None else inputtedTwitter
    currentUser.profile.linkedin = currentUser.profile.linkedin if inputtedLinkedin is None else inputtedLinkedin

    currentUser.update()

    return jsonify({"status": "success", "message": "Information updated", "data": currentUser.serialize()}), 200

@infoupdate.route('/reset', methods=['POST'])
def reset_password():
    sent_email = request.json.get('email')
    currentUser = User.query.filter_by(email= sent_email).first()
    if currentUser:
        password = random.randint(1000, 9999)
        # currentUser.password = generate_password_hash(password)
        msg = 'Temporary password is ' + password
        SMTP.sendmail(self, 'info@betterandbeyond.org', sent_email, msg)
        return jsonify({"status": "success", "message": "Password reset. Check email.", "data": None}), 200

    else: return jsonify({"status": "failed", "message":"Failed reseting password. Confirm emails is correct.", "data": None}), 418
    