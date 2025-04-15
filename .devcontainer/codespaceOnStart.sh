#! /bin/bash

# full update everything before anyone starts working on stuff
sudo apt update
sudo apt -y full-upgrade
sudo apt -y autoremove
sudo apt clean
sudo apt -y autoclean

# start nginx service upon codespace start (on port 1119)
sudo service nginx start