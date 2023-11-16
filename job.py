import subprocess
import time
import os
from datetime import datetime

def run_job():
    try:
        # Step 1
        subprocess.run("D:", shell=True, check=True)

        # Step 2
        os.chdir("D:\\Magnum\\backend")

        # Step 3
        subprocess.run("python manage.py data10", shell=True, check=True)

        # If all steps are successful, print success message with current time
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"{current_time} - Successfully completed job")

    except subprocess.CalledProcessError as e:
        # If any step fails, print the error message
        print(f"Error: {e}")

if __name__ == "__main__":
    # Run the job every minute
    while True:
        run_job()
        # Wait for one minute before running the job again
        time.sleep(60)
