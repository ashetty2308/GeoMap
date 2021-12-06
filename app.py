from logging import debug
from flask import Flask, render_template
 
app = Flask(__name__)
 
@app.route("/")
def index():
    return render_template("index.html")
 
@app.route("/hi/")
def who():
    return "testing hi!"
 
@app.route("/hi/<username>")
def greet(username):
    return f"Welcome, {username}!"
 
# run by going to terminal and -> py -m flask run
 
if __name__ == "__main__":
    app.run(debug=True)
 