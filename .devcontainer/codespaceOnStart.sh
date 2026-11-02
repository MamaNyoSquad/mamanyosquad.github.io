#! /bin/bash

# full update everything before anyone starts working on stuff
sudo apt update;
brew update;

# start nginx service upon codespace start (on port 1119)
sudo service nginx start;