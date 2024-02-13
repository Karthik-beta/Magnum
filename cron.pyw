import os

def run_command_in_directory(directory, command):
    try:
        # Change directory to the specified path
        os.chdir(directory)
        
        # Run the command in the specified directory
        os.system(command)
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Specify the path to the desired directory
    target_directory = r"C:\Getin Solution\Magnum\backend"

    # Specify the command to be executed
    command_to_run = "python manage.py data10"

    # Run the command in the specified directory
    run_command_in_directory(target_directory, command_to_run)
