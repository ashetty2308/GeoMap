from logging import debug
from flask import Flask, render_template
 
app = Flask(__name__, static_folder='static')
 
@app.route("/")
def index():
    return render_template("index.html")
 
@app.route("/geomap/")
def geomap():
    return render_template("index_2.html")
  
if __name__ == "__main__":
    app.run(debug=True)