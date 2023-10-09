import os
import subprocess
import sys

def run_command(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    return output, error

def main():
    # Change the path to your desired directory
    magnum_path = r"D:\Magnum"
    backend_path = os.path.join(magnum_path, "backend")

    # Navigate to the specified directory
    os.chdir(backend_path)

    # Command to run
    command = "python manage.py runserver 0.0.0.0:8000"

    # Run the command
    output, error = run_command(command)

    if error:
        print(f"Error: {error.decode('utf-8')}")
        sys.exit(1)
    else:
        print(f"Command executed successfully:\n{output.decode('utf-8')}")

if __name__ == "__main__":
    main()
