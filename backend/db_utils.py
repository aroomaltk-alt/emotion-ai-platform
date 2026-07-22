import sqlite3

def save_emotion(text, emotion, confidence):
    conn = sqlite3.connect("emotions.db")

    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO emotions (text, emotion, confidence)
        VALUES (?, ?, ?)
        """,
        (text, emotion, confidence)
    )

    conn.commit()
    conn.close()
def get_history():
    conn = sqlite3.connect("emotions.db")

    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM emotions
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    return rows