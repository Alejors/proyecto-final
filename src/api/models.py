from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True, unique=False, nullable=False)
    rol = db.relationship('Rol', backref='users', uselist=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "rol": self.rol.serialize()
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