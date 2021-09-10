build:
	sudo /usr/local/bin/docker-compose build
up:
	sudo /usr/local/bin/docker-compose up -d
down:
	sudo /usr/local/bin/docker-compose down
ps:
	sudo /usr/local/bin/docker-compose ps
clean:
	./setup/clean.sh
nginx-test:
	sudo /usr/local/bin/docker-compose exec nginx nginx -t
nginx-reload:
	sudo /usr/local/bin/docker-compose exec nginx nginx -s reload
log-dir:
	ls -l /var/log/fiware
logrotation:
	sudo logrotate -dv /etc/logrotate.d/fiware
setup-test:
	./test/script/setup_test.sh
cert-renew:
	sudo ./config/script/renew.sh
cert-revoke:
	sudo ./config/script/revoke.sh
cert-list:
	sudo ls -l /etc/letsencrypt/live/
log:
	cat /var/log/fiware/fi-bb.log
