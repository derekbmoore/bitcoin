#!/bin/bash

# Update package lists
sudo apt-get update

# Install necessary dependencies
sudo apt-get install -y curl software-properties-common

# Add the Bitcoin PPA
sudo add-apt-repository ppa:bitcoin/bitcoin

# Update package lists again
sudo apt-get update

# Install Bitcoin Core
sudo apt-get install -y bitcoind

# Create a Bitcoin data directory
mkdir -p ~/.bitcoin

# Set permissions
chmod 700 ~/.bitcoin

# Print completion message
echo "Bitcoin Core installation and setup completed."