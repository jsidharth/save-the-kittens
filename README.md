# Save the Kittens

The project is aimed to find the final coordinates of the woman who is stealing the kittens from the neighbourhood. 

# Algorithm
The algorithm calculates the movement of the woman by starting from (0,0). We also keep track of the woman's direction by keeping track change requires in relative axis. For each direction we encounter
- When LEFT or RIGHT is encountered we swap the values and apply a negation based on the direction the women is moving
- When FORWARD is encounterd the woman moves by 1 unit in the direction she is facing
- When an invalid direction is encountered an error is thrown


## Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd save-the-kittens
npm i
npm start
```

## Testing

The project uses `jest` for running the unit test. To run the test use `npm test`