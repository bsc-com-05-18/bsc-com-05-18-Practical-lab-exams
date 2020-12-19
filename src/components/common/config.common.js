import Axios from 'axios';

/**
 * Application global configuration
 * 
 * @author Isaac S. Mwakabira
 */
const Config = (function() {
    // Domain
    const JSON_PLACEHOLDER_SERVER = `https://jsonplaceholder.typicode.com`;

    // API_KEY
    const API_KEY = ``;

    const JSON_PLACEHOLDER_API = Axios.create({ baseURL: JSON_PLACEHOLDER_SERVER });

    return {
        API_KEY, 
        JSON_PLACEHOLDER_API
    }
})();

export default Config;