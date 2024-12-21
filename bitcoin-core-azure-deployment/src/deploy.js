const { DefaultAzureCredential } = require('@azure/identity');
const { ComputeManagementClient } = require('@azure/arm-compute');
const { ResourceManagementClient } = require('@azure/arm-resources');
const { NetworkManagementClient } = require('@azure/arm-network');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./src/config/azure-config.json', 'utf8'));

async function authenticate() {
    const credential = new DefaultAzureCredential();
    return credential;
}

async function createResourceGroup(resourceClient) {
    const resourceGroupParams = {
        location: config.location,
    };
    await resourceClient.resourceGroups.createOrUpdate(config.resourceGroupName, resourceGroupParams);
}

async function createVirtualMachine(computeClient, networkClient) {
    const vmParams = {
        location: config.location,
        hardwareProfile: {
            vmSize: config.vmSize,
        },
        storageProfile: {
            imageReference: {
                publisher: 'Canonical',
                offer: 'UbuntuServer',
                sku: '18.04-LTS',
                version: 'latest',
            },
            osDisk: {
                createOption: 'FromImage',
            },
        },
        osProfile: {
            computerName: config.vmName,
            adminUsername: config.adminUsername,
            adminPassword: config.adminPassword,
        },
        networkProfile: {
            networkInterfaces: [
                {
                    id: config.networkInterfaceId,
                },
            ],
        },
    };
    await computeClient.virtualMachines.beginCreateOrUpdateAndWait(config.resourceGroupName, config.vmName, vmParams);
}

async function main() {
    const credential = await authenticate();
    const resourceClient = new ResourceManagementClient(credential, config.subscriptionId);
    const computeClient = new ComputeManagementClient(credential, config.subscriptionId);
    const networkClient = new NetworkManagementClient(credential, config.subscriptionId);

    await createResourceGroup(resourceClient);
    await createVirtualMachine(computeClient, networkClient);
}

main().catch(err => {
    console.error('Error deploying VM:', err);
});