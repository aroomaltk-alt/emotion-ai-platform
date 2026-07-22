from sqlalchemy.orm import Session

from .models import User
from .schemas import UserRegister
from .security import (
    hash_password,
    verify_password
)


def create_user(db: Session, user: UserRegister):

    # Check duplicate email
    if db.query(User).filter(
        User.email == user.email
    ).first():
        raise ValueError("Email already exists")

    # Check duplicate username
    if db.query(User).filter(
        User.username == user.username
    ).first():
        raise ValueError("Username already exists")

    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(
            user.password
        )
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


def authenticate_user(
    db: Session,
    email: str,
    password: str
):

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        return None

    if not verify_password(
        password,
        user.hashed_password
    ):
        return None

    return user