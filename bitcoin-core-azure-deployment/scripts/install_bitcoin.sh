#!/bin/bash

# Define the version and directory
VERSION="28.0"
DIR="bitcoin-$VERSION"

# Extract the tar.gz file
tar -xzvf $DIR-x86_64-linux-gnu.tar.gz

# Move the files to /usr/local/bin
sudo install -m 0755 -o root -g root -t /usr/local/bin $DIR/bin/*

# Clean up
rm -rf $DIR