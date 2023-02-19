
import { getDirections, validateLocation } from './api.js';
import { requireValidation } from './util.js';
import findLocation from './findLocation.js';

const saveTheKittens = async () => {
    try {
        console.log('Collecting information from Forensic API.....');
        const { directions } = await getDirections();
        console.log(`Directions received from forensic team => \n ${directions.join('-->')}`);
        console.log('Calculating location coordinates....');
        const { x, y } = findLocation(directions);
        console.log(`Guessed location coordinates (${x}, ${y})`);
        const userValidationRequired = await requireValidation();
        if (userValidationRequired) {
            const { message } = await validateLocation(x, y);
            console.log(message);
        }
    } catch (err) {
        console.error(err);
    }
}

saveTheKittens();

