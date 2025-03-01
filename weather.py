import requests
def get_weather_data(city):
    API_key="f56131570c39e0770418ec3bf0535be8"
    url=f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_key}"
          
    try:
        response=requests.get(url,timeout=10)
        data= response.json()
        weather_data={
           "city":city,
           "temp":data["main"]["temp"],
           "main":data["weather"][0]["main"]
        }
        return weather_data
    except:
        print("ошибка соеденения")
        return None


print(get_weather_data("Clearwater"))
