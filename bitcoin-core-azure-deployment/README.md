# Bitcoin Core Azure Deployment

This project automates the deployment of a Bitcoin Core full node on Microsoft Azure. It provides scripts and configuration files to streamline the setup process.

## Project Structure

```
bitcoin-core-azure-deployment
├── src
│   ├── deploy.js          # Main logic for deployment
│   └── config
│       └── azure-config.json  # Azure configuration settings
├── scripts
│   └── setup.sh          # Environment setup script
├── package.json          # NPM configuration and dependencies
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
```

## Prerequisites

- Node.js and npm installed
- Azure account with appropriate permissions
- Azure CLI installed and configured

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bitcoin-core-azure-deployment.git
   cd bitcoin-core-azure-deployment
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Azure settings:
   - Edit `src/config/azure-config.json` to include your Azure subscription ID, resource group name, and VM specifications.

4. Run the setup script:
   ```
   ./scripts/setup.sh
   ```

5. Deploy the Bitcoin Core full node:
   ```
   node src/deploy.js
   ```

## Usage Guidelines

- Ensure that your Azure account has the necessary permissions to create resources.
- Monitor the deployment process for any errors and check the logs for troubleshooting.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

