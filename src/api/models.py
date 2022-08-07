from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True, unique=False, nullable=False)
    rol = db.relationship('Rol', backref='users', uselist=False)
    profile = db.relationship('Profile', backref='user', uselist=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "rol": self.rol.serialize(),
            "profile": self.profile.serialize()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Profile(db.Model):
    __tablename__='profiles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), default="Unknown")
    lastname = db.Column(db.String(80), default="Unknown")
    phonenumber = db.Column(db.Integer, default=0)
    facebook = db.Column(db.String(80), default="")
    instagram = db.Column(db.String(80), default="")
    twitter = db.Column(db.String(80), default="")
    linkedin = db.Column(db.String(80), default="")
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "phonenumber": self.phonenumber,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "linkedin": self.linkedin
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        

class Rol(db.Model):
    __tablename__='roles'
    id = db.Column(db.Integer, primary_key= True)
    cliente = db.Column(db.Boolean(), default= True)
    admin = db.Column(db.Boolean(), default=False)
    profesor = db.Column(db.Boolean(), default=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "cliente": self.cliente,
            "admin": self.admin,
            "profesor": self.profesor
        }