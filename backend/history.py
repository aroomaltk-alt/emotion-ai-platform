import sqlite3

conn = sqlite3.connect(
    "history.db",
    check_same_thread=False
)

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS history(
id INTEGER PRIMARY KEY AUTOINCREMENT,
analysis_type TEXT,
emotion TEXT,
confidence REAL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

conn.commit()


def save_history(
    analysis_type,
    emotion,
    confidence
):

    cursor.execute(
        """
        INSERT INTO history
        (analysis_type, emotion, confidence)
        VALUES (?, ?, ?)
        """,
        (
            analysis_type,
            emotion,
            confidence
        )
    )

    conn.commit()


def get_history():

    cursor.execute(
        """
        SELECT *
        FROM history
        ORDER BY created_at DESC
        """
    )

    return cursor.fetchall()


def clear_history():

    cursor.execute(
        "DELETE FROM history"
    )

    conn.commit()