from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Rol, Profile, Preference, Service
from flask_jwt_extended import get_jwt_identity, jwt_required

preferenceupdate = Blueprint('preferenceupdate', __name__)

@preferenceupdate.route('/preferences', methods=['POST'])
@jwt_required()
def updatePreferences():
    currentId = get_jwt_identity()
    currentUser = User.query.get(currentId)
    data = request.json.get('services')
    
    preference_id_list = []
    for inputs in data:
        service_id = Service.query.filter_by(name = inputs).first().id
        preference_id_list.append(service_id)
    
    checkServices = Preference.query.filter_by(user_id = currentId).all()
    oldIds_list = list(map(lambda item: item.service_id, checkServices))
    
    for oldId in checkServices:
        if not oldId.service_id in preference_id_list:
            db.session.delete(oldId)
            db.session.commit()
    
    for newId in preference_id_list:
        if not newId in oldIds_list:
            newPreference = Preference()
            newPreference.user_id = currentId
            newPreference.service_id = newId
            db.session.add(newPreference)
            db.session.commit()

    return jsonify({"status": "success", "message": "Preferences saved!", "data": None}), 200