import inquirer from 'inquirer';

const requireValidation = async () => {
    const userInput = await inquirer.prompt({
        name: 'validate',
        type: 'input',
        message: 'Do you want to check with forensic team if the guessed location is correct?(Y/N)',
        default() {
            return 'N'
        },
    });
    return userInput.validate === 'Y';
}

export {
    requireValidation,
}