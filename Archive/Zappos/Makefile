all:
	uglifyjs --compress --mangle -o public/main.min.js -- public/main.js
	sass public/main.scss:public/main.min.css --style compressed
