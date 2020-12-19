/**
 * @author Isaac S. Mwakabira
 * 
 * Promise wrapper
 */
const Promise = promise => {
    return {
        get() {
            return promise
                .then(response => response)
                .catch(error => error);        
        }
    }
}

export default Promise;