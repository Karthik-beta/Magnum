@echo off
D:

:loop
cd Magnum\backend
python manage.py data10

if errorlevel 1 (
    echo Error occurred. Exiting...
    goto :end
) else (
    echo Script executed successfully.
)

timeout /t 60 /nobreak > nul
goto :loop

:end
