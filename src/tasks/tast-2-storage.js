const fs = require("fs");

const fileName = "reg.txt";
const divider = ":";
const fsOptions = {
    encoding: "utf-8",
};

const saveCreds = (login, password) => {
    fs.writeFileSync(fileName, `${login}${divider}${password}`, fsOptions);
}
 
const readCreds = () => {
    const data = fs.readFileSync(filename, fsOptions);
    if (data) {
        const [login, password] = data.split(divider);
        return { login, password };
    }
    return null;
}

module.exports = { 
    saveCreds,
    readCreds,
}