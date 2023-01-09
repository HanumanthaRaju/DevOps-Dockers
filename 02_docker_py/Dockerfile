#Deriving the latest base image
FROM python:latest


# Any working directory can be chosen as per choice like '/' or '/home' etc
WORKDIR /home

#to COPY the remote file at working directory in container
COPY helloworld.py ./


#CMD instruction should be used to run the software
#contained by your image, along with any arguments.

CMD [ "python", "./helloworld.py"]