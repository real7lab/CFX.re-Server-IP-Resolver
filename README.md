# CFX.re Server IP Resolver

## Overview

**CFX.re Server IP Resolver** is a Node.js script designed to resolve the IP address of a CFX.re server based on its URL. It allows you to quickly determine the IP address associated with a server's CFX.re link and provides user-friendly output.

### Developed by

- **real7lab**
- [Discord Server](https://discord.gg/visionn)

## Features

- Resolves IP address from a CFX.re URL.
- Handles various URL formats and provides clear output.
- User-friendly error messages and notes.

## Installation

### Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/real7lab/CFX.re-Server-IP-Resolver.git
   cd CFX.re-Server-IP-Resolver
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Script**

   ```bash
   node cfxip.js
   ```

## Configuration

### `cfxip.js`

There are no additional configuration files for this script. You simply need to run the script and provide the CFX.re address when prompted.

### Usage

1. **Launch the Script**: Run `node cfxip.js` in your terminal.
2. **Enter CFX.re Address**: When prompted, input the server's CFX.re URL or ID.
3. **View Results**: The script will display the resolved IP address of the server or an error message if the server cannot be found.

## Error Handling

The script logs errors directly to the console. Make sure to check the output for any issues related to URL resolution or network errors.

## Troubleshooting

- **Error: Unable to find the server!** Ensure the CFX.re address is correct and that the server is currently online.
- **Note:** Some servers may obscure their IP address. Ensure the server is operational and the URL is correctly formatted.

## License

This project is developed by [real7lab](https://discord.gg/visionn).

For more details, please refer to our [official Discord server](https://discord.gg/visionn).
