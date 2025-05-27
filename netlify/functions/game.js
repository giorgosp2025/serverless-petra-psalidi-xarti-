exports.handler = async (event) => {
    const choices = ['πέτρα', 'ψαλίδι', 'χαρτί'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const { userChoice } = JSON.parse(event.body);

    let result;
    if (userChoice === computerChoice) {
        result = "Ισοπαλία!";
    } else if (
        (userChoice === 'πέτρα' && computerChoice === 'ψαλίδι') ||
        (userChoice === 'ψαλίδι' && computerChoice === 'χαρτί') ||
        (userChoice === 'χαρτί' && computerChoice === 'πέτρα')
    ) {
        result = "Κέρδισες!";
    } else {
        result = "Έχασες!";
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ computerChoice, result }),
    };
};