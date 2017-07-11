#!/bin/bash
#defined 
TOMCAT_HOME="/home/tomcat/web"
TOMCAT_PORT=9080
PROJECT_HOME="/home/project/web_test"
PROJECT="$1"
#param validate
if [ $# -lt 1 ]; then  
  echo "you must use like this : ./deployment_test.sh <projectname> [tomcat port] [tomcat home dir]"  
  exit  
fi 
if [ "$2" != "" ]; then
   TOMCAT_PORT=$2
fi
if [ "$3" != "" ]; then
   TOMCAT_HOME="$3"
fi
#shutdown tomcat
"$TOMCAT_HOME"/bin/shutdown.sh
echo "tomcat shutdown"
#check tomcat process
tomcat_pid=`/usr/sbin/lsof -n -P -t -i :$TOMCAT_PORT`
echo "current :" $tomcat_pid
while [ -n "$tomcat_pid" ]
do
 sleep 5
 tomcat_pid=`/usr/sbin/lsof -n -P -t -i :$TOMCAT_PORT`
 echo "scan tomcat pid :" $tomcat_pid
done
#publish project
echo "scan no tomcat pid,$PROJECT publishing"


rm -rf  $PROJECT_HOME/*
rm -rf  $TOMCAT_HOME/work/*

echo "delete $PROJECT"

cp  target/libs/$PROJECT.war "$PROJECT_HOME"/$PROJECT.war

#bak project
BAK_DIR=/home/project/save/bak/$PROJECT/`date +%Y%m%d`
mkdir -p "$BAK_DIR"
#backup
#cp target/libs/$PROJECT.war "$BAK_DIR"/"$PROJECT"_`date +%H%M%S`.war
#remove tmp
#rm -rf /home/project/sys_test/*
#start tomcat
echo "sh $TOMCAT_HOME/bin/startup.sh"
sh "$TOMCAT_HOME/bin/startup.sh"

echo "tomcat is starting,please try to access $PROJECT conslone url" 
