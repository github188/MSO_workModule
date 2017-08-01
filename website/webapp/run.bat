@echo  off 
cd X:\projects\mso-git\website\webapp
start /b supervisor server.js
start /b http://localhost:8090/

