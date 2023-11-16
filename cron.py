import subprocess

# Open CMD
cmd_process = subprocess.Popen(['cmd.exe'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

# Commands to be executed in CMD
commands = [
    'cd /d D:\Magnum\backend',  # Change directory to D:\Magnum\backend
    'python manage.py data10',    # Run the desired Python script/command
    'exit',                       # Exit CMD
]

# Send commands to CMD
for cmd in commands:
    cmd_process.stdin.write(cmd + '\n')

# Close CMD and get output
cmd_output, cmd_error = cmd_process.communicate()

# Display output and error
print('CMD Output:')
print(cmd_output)
print('CMD Error:')
print(cmd_error)