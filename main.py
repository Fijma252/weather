from flask import Flask,render_template,request
from weather import get_weather_data
app=Flask(__name__)

@app.route("/")
def index():
    city=request.args.get("city","Clearwater")
    weather_data=get_weather_data(city)
    return render_template("index.html",weather_data=weather_data)

app.run(debug=True)
