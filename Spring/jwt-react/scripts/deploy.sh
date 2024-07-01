#!/usr/bin/env bash
REPOSITORY=/home/ubuntu/com_std1
cd $REPOSITORY

APP_NAME=com_std1

CURRENT_PID=$(sudo lsof -t -i:3004)

if [ -z $CURRENT_PID ]
then
  sudo echo "> 종료할 애플리케이션이 없습니다."
else
  sudo echo "> kill -9 $CURRENT_PID"
  sudo kill -15 $CURRENT_PID
  sudo sleep 5
fi

echo "> Delete"
sudo npm cache clean --force
rm -rf node_modules
rm -rf package-lock.json
echo "> Run"
sudo cp ../com_std1_server.js ./build/com_std1_server.js
sudo node ./build/com_std1_server.js > ../com_std1.out 2>&1 &
