import requests 
import datetime
from flask import Flask, render_template, request, jsonify, redirect, url_for, session, logging, flash
from passlib.hash import sha256_crypt
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')
app.secret_key = "YULCODE123"
db = SQLAlchemy(app)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
