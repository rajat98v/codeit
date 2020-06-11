# codeit

## Development Installs

### pip installs for django

```python
pip install \
django-cors-headers \
djangorestframework \
django-allauth \
django-rest-auth \
```

### Arch Installation (System Wide)

```bash
sudo pacman -S python-django
sudo pacman -S python-psycopg2
sudo pacman -S python-django-rest-framework
sudo pacman -S python-django-allauth
sudo pacman -S python-jinja
sudo pacman -S python-virtualenv

yay -S python-django-rest-auth
yay -S python-django-cors-headers
```

### Database

###### Currently Using SQLlite database provided by django default so, no need to install any database for development.

## React

### npm installs

```bash
npm install antd
npm install axios --save
npm install --save react-router-dom
npm install --save react-redux
npm install --save redux redux-thunk
```

### to start server for react

```bash
cd frontend/gui
nmp start
```
- Don't forget to `python manage.py runserver` else frontend would be able to talk to server.


