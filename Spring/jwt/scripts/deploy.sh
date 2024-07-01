#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/com_std1_api
cd $REPOSITORY

APP_NAME=com_std1_api
JAR_NAME=$(sudo ls $REPOSITORY/build/libs/ | grep 'SNAPSHOT.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/build/libs/$JAR_NAME

CURRENT_PID=$(sudo lsof -t -i:8084)

if [ -z $CURRENT_PID ]
then
  sudo echo "> 종료할 애플리케이션이 없습니다."
else
  sudo echo "> kill -9 $CURRENT_PID"
  sudo kill -15 $CURRENT_PID
  sudo sleep 5
fi

sudo echo "> Deploy - $JAR_PATH "
sudo nohup java -jar $JAR_PATH > ../com_std1_api.out 2>&1 &