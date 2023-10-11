import subprocess
import os
import sys
import getpass
import shutil

def run_command(command):
    process = subprocess.Popen(command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    output, error = process.communicate()
    return output, error

def main():
    # Set the path to the desired directory
    magnum_path = r"D:\Magnum\backend"

    # Get the username of the current user
    username = getpass.getuser()

    # Create a batch file to run at startup
    batch_script = f"""
    @echo off
    cd /d "{magnum_path}"
    python manage.py runserver 0.0.0.0:8000
    exit
    """

    # Determine the startup directory based on the user's profile
    startup_directory = os.path.join(os.getenv("APPDATA"), f"Microsoft\\Windows\\Start Menu\\Programs\\Startup")
    startup_script_path = os.path.join(startup_directory, "MagnumStartupScript.bat")

    # Write the batch script to the startup directory
    with open(startup_script_path, 'w') as batch_file:
        batch_file.write(batch_script)

    print(f"StartupScript added to startup for user: {username}")

if __name__ == "__main__":
    main()
