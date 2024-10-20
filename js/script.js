// Seleção de elementos
const generatePasswordButton = document.querySelector("#button-create-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// NOVOS ELEMENTOS
const openGeneratorButton = document.querySelector("#generate-password");
const containerGeneratePassword = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const letterInput = document.querySelector("#letters");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");
const copyPasswordBtn = document.querySelector("#copy-password");


// FUNÇÕES
const getLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "!@#$%&*()-=?|][*-/<>;:"
    return symbols[Math.floor(Math.random () * symbols.length)];
}

const generatePassword = (getLowerCase, getUpperCase, getNumber, getSymbol) => {
    let password = "";

    const passwordLenght = +lengthInput.value;

    const generators = []

    if (letterInput.checked) {
        generators.push(getLowerCase, getUpperCase);
    }

    if (numberInput.checked) {
        generators.push(getNumber);
    }

    if (symbolInput) {
        generators.push(getSymbol);
    }

    if (generators.length === 0) {
        return;
    }



    for (i = 0; i < passwordLenght; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random () * generators.length)]();

            password += randomValue;
        })
    }

    password = password.slice(0, passwordLenght);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}


// EVENTOS
generatePasswordButton.addEventListener("click", () => {
    generatePassword (
        getLowerCase,
        getUpperCase,
        getNumber,
        getSymbol
    )
})

openGeneratorButton.addEventListener("click", () => {
    containerGeneratePassword.classList.toggle("hide");
})

copyPasswordBtn.addEventListener("click", (e) => {
    copyPasswordBtn.innerText = "Senha copiada!";

    setTimeout(() => {
        copyPasswordBtn.innerText = "Copiar senha"
    }, 2000)
})