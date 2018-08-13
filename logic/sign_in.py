from models.user import User
from models.database_setup import SQLAlchemyService

db = SQLAlchemyService().get_instance()


def is_valid_user(email, password):
    """Verify if a user exists with the give email address and password"""
    try:
        user_details = db.session.query(
            User
        ).filter(
            User.email == email,
        ).one_or_none()

        if user_details:
            if user_details.check_password(password):
                return (True, "Successfully signed in")
            else:
                return (False, "Invalid password")
        else:
            return (False, "Email ID does not exist")
    except Exception as e:
        db.session.rollback()
        return (False, str(e.message))
