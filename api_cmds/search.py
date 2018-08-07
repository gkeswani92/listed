import json
import urlparse

from flask import Blueprint
from flask import request
from flask import redirect

from clients.yelp import YelpAPI
from config import DEFAULT_LATITUDE
from config import DEFAULT_LONGITUDE
from config import YELP_API_KEY

search_suggest_page = Blueprint('search', __name__)

@search_suggest_page.route('/search_suggest', methods=['GET', 'POST'])
def search_suggest():
    """Return autocomplete suggestions from Yelp based on the user inputself.
    NOTE: If not location data is present, default to San Francisco
    """
    user_input = request.args.get('text')
    latitude = request.args.get('latitude', DEFAULT_LATITUDE)
    longitude = request.args.get('longitude', DEFAULT_LONGITUDE)

    if not user_input:
        return json.dumps({})

    yelp_session_obj = YelpAPI(api_key=YELP_API_KEY)
    autocomplete_suggestions = yelp_session_obj.autocomplete_query(
        text=user_input,
        latitude=latitude,
        longitude=longitude,
    )

    response = {
        'businesses': autocomplete_suggestions['businesses'],
        'categories': autocomplete_suggestions['categories'],
    }
    return json.dumps(response)
