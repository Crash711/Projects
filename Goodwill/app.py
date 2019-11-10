from flask import Flask, render_template
from butter_cms import ButterCMS
client = ButterCMS('fe24aecaf5a4ed78ad167e1a820b3e7fd04b90b2')

app=Flask(__name__)

@app.route('/', methods=['POST'])
def home():
    homepage = client.posts.get('about-us')
    return render_template('home.html', obj=homepage['data']['body'])

if __name__ == "__main__": app.run(debug=True)