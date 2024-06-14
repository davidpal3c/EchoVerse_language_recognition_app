# EchoVerse

App Purposes
core App

    Contains main views, templates, and base functionalities (e.g., homepage, layout).

  Speech_&_text Conversion App

    Handles speech-to-text functionality.
    Includes views for processing speech input.

   Example Usage:
    - User interacts with the frontend to send a speech input.
    - Request is routed to speech_to_text app's view for processing.
    - The converted text is returned and displayed dynamically on the frontend.


text_to_speech App

    Manages text-to-speech conversion.
    Contains views for generating audio from text.

   Example Usage:
    - User enters text into the frontend interface.
    - The text is sent to the text_to_speech app's view.
    - Audio file is generated and returned to the frontend for playback.

dictionary App

    Provides dictionary functionalities (definitions, synonyms, antonyms).
    Integrates with external dictionary APIs.

   Example Usage:
    - User submits a word query through the frontend.
    - Request is handled by the dictionary app's view which interacts with external dictionary APIs.
    - Word details (definitions, synonyms, antonyms) are retrieved and displayed on the frontend.

user_auth App

    Manages user authentication and authorization.
    Includes views for user login, registration, and logout.


   Example Usage:
    - User performs login or registration through the frontend.
    user_auth app's views handle authentication and session management.
    - User state (logged in/out) is updated dynamically on the frontend without page refresh.

