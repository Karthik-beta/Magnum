import os
import getpass
import shutil

def create_startup_script(frontend_path):
    # Get the username of the current user
    username = getpass.getuser()

    # Create a batch script to run at startup
    batch_script = f"""
    @echo off
    cd /d "{frontend_path}"
    ng serve --host 0.0.0.0
    exit
    """

    # Determine the startup directory based on the user's profile
    startup_directory = os.path.join(os.getenv("APPDATA"), f"Microsoft\\Windows\\Start Menu\\Programs\\Startup")
    startup_script_path = os.path.join(startup_directory, "MagnumFrontendStartupScript.bat")

    # Write the batch script to the startup directory
    with open(startup_script_path, 'w') as batch_file:
        batch_file.write(batch_script)

    print(f"StartupScript added to startup for user: {username}")

def main():
    # Set the path to the desired directory
    magnum_path = r"D:\Magnum"
    frontend_path = os.path.join(magnum_path, "frontend")

    # Create the startup script
    create_startup_script(frontend_path)

if __name__ == "__main__":
    main()
