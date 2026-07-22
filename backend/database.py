import sqlite3

conn = sqlite3.connect("emotions.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    profession TEXT,
    location TEXT,
    bio TEXT,
    avatar TEXT
)
""")

conn.commit()
conn.close()