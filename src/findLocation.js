import { INSTRUCTIONS } from './constants.js';

const findLocation = (directions) => {

    if (!directions || !directions.length) {
        throw new Error('No directions recevied. Exiting!!')
    }
    /** The woman starts at center of the graph. Initializing start location to (0,0) */
    const currentLocation = {
        x: 0,
        y: 0
    }
    /** Initially woman is facing north. Hence the change would be only on Y axis.*/
    const axisChange = {
        dx: 0,
        dy: 1
    }
    /**
     * When LEFT or RIGHT is encountered we swap the values and apply a negation based on the direction the women is moving
     * When FORWARD is encounterd the woman moves by 1 unit in the direction she is facing
     * When an invalid direction is encountered an error is thrown
     */
    directions.forEach((currentDirection, i) => {
        switch (currentDirection) {
            case INSTRUCTIONS['L']:
                [axisChange.dx, axisChange.dy] = [axisChange.dy !== 0 ? -axisChange.dy : 0, axisChange.dx];
                break;
            case INSTRUCTIONS['R']:
                [axisChange.dx, axisChange.dy] = [axisChange.dy, axisChange.dx !== 0 ? -axisChange.dx : 0];
                break;
            case INSTRUCTIONS['F']:
                currentLocation.x += axisChange.dx;
                currentLocation.y += axisChange.dy;
                break;
            default:
                throw new Error('Encountered an invalid direction. Exiting!!');
        }
    });
    return currentLocation;
}

export default findLocation;