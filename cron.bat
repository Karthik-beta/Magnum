@echo off
cd /d "C:\Getin Solution\Magnum\backend" && (
    python manage.py data10
    exit /b 0
) || (
    echo Error executing 'python manage.py data10'
    exit /b 1
)
