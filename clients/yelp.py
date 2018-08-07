import requests

AUTOCOMPLETE_API_URL = 'https://api.yelp.com/v3/autocomplete'
BUSINESS_API_URL = 'https://api.yelp.com/v3/businesses/{}'
BUSINESS_MATCH_API_URL = 'https://api.yelp.com/v3/businesses/matches/{}'
EVENT_LOOKUP_API_URL = 'https://api.yelp.com/v3/events/{}'
EVENT_SEARCH_API_URL = 'https://api.yelp.com/v3/events'
FEATURED_EVENT_API_URL = 'https://api.yelp.com/v3/events/featured'
PHONE_SEARCH_API_URL = 'https://api.yelp.com/v3/businesses/search/phone'
REVIEWS_API_URL = 'https://api.yelp.com/v3/businesses/{}/reviews'
SEARCH_API_URL = 'https://api.yelp.com/v3/businesses/search'
TRANSACTION_SEARCH_API_URL = 'https://api.yelp.com/v3/transactions/{}/search'


class YelpAPI:
    """This class implements the complete Yelp Fusion API"""

    def __init__(self, api_key, timeout_s=None):
        """Instantiate a YelpAPI object with an API key from Yelp"""
        self._api_key = api_key
        self._timeout_s = timeout_s
        self._yelp_session = requests.Session()
        self._headers = {'Authorization': 'Bearer {}'.format(self._api_key)}

    def _query(self, url, **kwargs):
        """Query the URL, parse the response as JSON, and check for errors.
        If all goes well, return the parsed JSON.
        """
        parameters = YelpAPI._get_clean_parameters(kwargs)
        response = self._yelp_session.get(
            url,
            headers=self._headers,
            params=parameters,
            timeout=self._timeout_s,
        )
        response_json = response.json()

        # Yelp can return one of many different API errors, so check for one of them.
        if 'error' in response_json:
            raise YelpAPIError('{}: {}'.format(
                response_json['error']['code'],
                response_json['error']['description'],
            ))

        # we got a good response, so return
        return response_json

    @staticmethod
    def _get_clean_parameters(kwargs):
        """Clean the parameters by filtering out any parameters that have a None value"""
        return {
            (k, v)
            for k, v in kwargs.items()
            if v is not None
        }

    def autocomplete_query(self, **kwargs):
        """Query the Yelp Autocomplete API"""
        if not kwargs.get('text'):
            raise ValueError('Valid text must be provided for auto complete API')
        return self._query(AUTOCOMPLETE_API_URL, **kwargs)
