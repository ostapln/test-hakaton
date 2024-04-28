setup:
	sudo docker-compose build
	sudo docker-compose run backend python manage.py migrate
	sudo docker-compose run backend python manage.py createsuperuser

build:
	sudo docker-compose build

run:
	sudo docker-compose up

stop:
	sudo docker-compose down

makemigrations:
	sudo docker-compose run backend python manage.py makemigrations

migrate:
	sudo docker-compose run backend python manage.py migrate

delete_db:
	sudo docker-compose run backend python manage.py flush
	sudo docker-compose run backend python manage.py migrate

createsuperuser:
	sudo docker-compose run backend python manage.py createsuperuser

shell:
	sudo docker-compose run backend python manage.py shell

test:
	sudo docker-compose run backend python manage.py test

clean:
	sudo docker-compose down -v

format:
	black src/ --config utils/black.toml

docker_format:
	sudo docker-compose run backend black src/ --config utils/black.toml

dumpdata:
	sudo docker-compose run backend python manage.py dumpdata > alldata.json

stop_redis:
	sudo systemctl stop redis

redis:
	sudo apt install redis-server
	redis-server
	redis-cli ping

graphviz:
	sudo apt-get install graphviz
	echo python3 manage.py graph_models -a -g -o my_project_models.png

clean_cache:
	sudo docker-compose exec redis redis-cli flushall

load_data:
	sudo docker-compose run backend python manage.py loaddata fixtures/fixtures.json
