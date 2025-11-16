#! /bin/bash

# update repofiles, full upgrades will be executed upon postStartCommand
sudo apt update

# install "necessary" packages from commandline
sudo apt -y install nginx

# backup original and move the provided one to its directories
sudo mv /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default.bak000
sudo cp .devcontainer/nginxInit /etc/nginx/sites-enabled/default