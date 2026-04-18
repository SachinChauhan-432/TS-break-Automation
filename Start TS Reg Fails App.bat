@echo off
title TS Reg Fails App Server
echo ==============================================
echo Starting TS Reg Fails Application Server...
echo ==============================================
echo.
echo Please leave this window open while using the app.
echo Closing this window will stop the application.
echo.

cd "C:\Users\sachi\Documents\TSRegFailsApp"

:: Wait a moment for server to start, then open browser
start "" http://localhost:5173

:: Start the dev server
cmd.exe /c "npm run dev"
