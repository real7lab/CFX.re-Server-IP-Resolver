/*
Easy CFX.re Server IP Resolver

Developed by real7lab

discord.gg/visionn 
*/

const readline = require('readline');
const axios = require('axios');
const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function repeat() {
    i.question("Please input the server's CFX.re address (e.g., cfx.re/join/yyyyyy or yyyyyy): ", async (input) => {
        let firstUrl;
        let formattedUrl;

        if (input.startsWith("cfx.re/join/")) {
            firstUrl = `https://${input}`;
            formattedUrl = input;
        } else if (input.startsWith("https://cfx.re/join/")) {
            firstUrl = input;
            formattedUrl = input.replace("https://", "");
        } else {
            firstUrl = `https://cfx.re/join/${input}`;
            formattedUrl = `cfx.re/join/${input}`;
        }

        try {
            const response = (await axios.get(firstUrl)).headers["x-citizenfx-url"];
            const serverIp = response.replace("http://", "").replace("/", "");
            console.log(`\nCFX.re Link: \x1b[37m${formattedUrl}`);
            console.log(`Resolved IP: \x1b[33m${serverIp}\x1b[0m\n`);
        } catch (error) {
            console.log("\x1b[31mError: Unable to find the server! Verify the CFX.re address or check if the server is currently online.\x1b[0m\n");
        }

        console.log("\x1bNote: If you have questions or issues you can add me on Discord 'real7lab'.\x1b\n");

        repeat(); 
    });
}

repeat();
