def generate_response(emotion):

    responses = {

        "happy":
        "You seem happy today. That's wonderful to hear!",

        "joy":
        "You seem happy today. That's wonderful to hear!",

        "sad":
        "I notice you may be feeling sad. Would you like to talk about it?",

        "sadness":
        "I notice you may be feeling sad. Would you like to talk about it?",

        "angry":
        "It sounds like something may be frustrating you. What happened?",

        "fear":
        "You seem worried. Sometimes talking through concerns can help.",

        "neutral":
        "How has your day been so far?",

        "surprise":
        "Something unexpected seems to have happened!"
    }

    return responses.get(
        emotion,
        "Tell me more about how you're feeling."
    )