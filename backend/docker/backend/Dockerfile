FROM python:3.10

WORKDIR /app

RUN apt update && apt -qy upgrade

COPY requirements /app/requirements
RUN pip install -r requirements/base-requirements.txt

COPY . /app/

WORKDIR /app/backend