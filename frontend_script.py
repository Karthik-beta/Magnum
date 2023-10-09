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
    frontend_path = os.path.join(magnum_path, "frontend")

    # Navigate to the specified directory
    os.chdir(frontend_path)

    # Command to run
    command = "ng serve --host 0.0.0.0"

    # Run the command
    output, error = run_command(command)

    if error:
        print(f"Error: {error.decode('utf-8')}")
        sys.exit(1)
    else:
        print(f"Command executed successfully:\n{output.decode('utf-8')}")

if __name__ == "__main__":
    main()
