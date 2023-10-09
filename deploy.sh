#!/bin/bash

# Variables FTP
FTP_SERVER="$1"
FTP_USERNAME="$2"
FTP_PASSWORD="$3"
REMOTE_DIR="/public_html"

# Chemin local du répertoire de construction
LOCAL_DIR="./"

# Utilisation de l'outil "lftp" pour le déploiement
lftp -c "set ftp:list-options -a;
open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER;
lcd $LOCAL_DIR;
cd $REMOTE_DIR;
mirror --reverse --delete --verbose --exclude-glob .git* --exclude .git/ $LOCAL_DIR $REMOTE_DIR;
quit;"
