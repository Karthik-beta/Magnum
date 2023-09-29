# Use an official Python runtime as a parent image
FROM python:3.10.2

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Add this line to include the cron job
RUN echo '*/5 * * * * root /usr/local/bin/python /app/manage.py data4' > /etc/cron.d/data4_cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/mycron

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Expose port 8000 to the outside world
EXPOSE 8000

# Define the command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
