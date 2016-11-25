@echo off
echo.

echo. 
echo. 
echo. 

mkdir empty_dir
robocopy empty_dir node_modules /s /mir
rmdir empty_dir
rmdir node_modules

echo. 
echo. 
echo. 

mkdir empty_dir
robocopy empty_dir bower_components /s /mir
rmdir empty_dir
rmdir bower_components