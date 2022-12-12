# Flexmoney Yoga Registration Form

The form contains 4 required fields name , username , age and Batch Timings . The form also consist of Three Buttons
 
 - Make Enrollment for New user
 - Pay the fee for current Month
 - Edit the Batch
 
 Based on certain Validations which are performed in the backend the data is saved in the database . 
 
 ![image](https://user-images.githubusercontent.com/58383389/207111904-ed8277c1-5159-4b46-abed-5b55c8b7ff1b.png)

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/gocardless/sample-django-app.git
```

### Setup backend

Go to backend folder

```sh
$ cd backend
```

Create Virtual enviornment , Make sure you have python and virtualenv installed 
```sh
$ python -m venv env
```
Activate Virtual enviornment

```sh
$ source env/bin/activate
```
now use requirements.txt file and install all necessary packages
```sh
$ pip install -r requirements.txt
```
now you can startup your server of backend before that makemirations and also create superuser for testing purpose

```sh
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser // enter username and password
$ python manage.py runserver
```


### Setup frontend

```sh
 $ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```sh
$ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


# ER DIAGRAM
![image](https://user-images.githubusercontent.com/58383389/207133396-bf5838cf-8c53-41d3-b991-37eae1a41160.png)



