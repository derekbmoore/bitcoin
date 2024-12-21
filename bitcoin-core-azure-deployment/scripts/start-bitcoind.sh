#!/bin/bash

# Define the configuration file and data directory
CONFIG_FILE="/etc/bitcoin/bitcoin.conf"
DATA_DIR="/var/lib/bitcoind"

# Start Bitcoin Core
/usr/local/bin/bitcoind -conf=$CONFIG_FILE -datadir=$DATA_DIR -daemon

# Check if Bitcoin Core started successfully
if [ $? -eq 0 ]; then
  echo "Bitcoin Core started successfully."
else
  echo "Failed to start Bitcoin Core."
fi