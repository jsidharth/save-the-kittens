import axios from 'axios';
import { FORENSIC_API_BASE_URL } from './constants.js'

const getDirections = async () => {
    try {
        const response = await axios.get(`${FORENSIC_API_BASE_URL}/directions`);
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
        const message = err.data.error ? err.data.error : 'Something went wrong with forensic API to get directions!!';
        throw new Error(`${message}`);
    }
}

const validateLocation = async (x, y) => {
    try {
        const response = await axios.get(`${FORENSIC_API_BASE_URL}/location/${x}/${y}`);
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
        if (err.response.status === 429) {
            throw new Error(`Oops!! Exceeded the number of available validations. Cannot send out search parties anymore.`)
        }
        const message = err.data.error ? err.data.error : 'Something went wrong with forensic API to validate results!!';
        throw new Error(`${message}`)
    }
}

export {
    getDirections,
    validateLocation
}