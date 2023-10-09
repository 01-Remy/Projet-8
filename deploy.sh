#!/bin/bash

# Variables FTP
FTP_SERVER="${{ secrets.FTP_SERVER }}"
FTP_USERNAME="${{ secrets.FTP_USERNAME }}"
FTP_PASSWORD="${{ secrets.FTP_PASSWORD }}"
REMOTE_DIR="/public_html"

# Chemin local du répertoire de construction
LOCAL_DIR="./build/"

# Utilisation de l'outil "lftp" pour le déploiement
lftp -c "set ftp:list-options -a;
open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER;
lcd $LOCAL_DIR;
cd $REMOTE_DIR;
mirror --reverse --delete --verbose --exclude-glob .git* --exclude .git/ $LOCAL_DIR $REMOTE_DIR;
quit;"