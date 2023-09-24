# Import necessary Python modules
from flask import Flask, render_template, request, jsonify

# Create a Flask web application instance
app = Flask(__name__)

# Define routes for different web pages/templates

@app.route('/')
def index_page():
    return render_template('index.html')


@app.route('/click_me')
def click_me():
    return render_template('click-me.html')

@app.route('/Suggestions')
def form_data():
    return render_template('form.html')

@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

@app.route('/QandA')
def QandA():
    return render_template('QandA.html')



# Run the Flask app if this file is the main program
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False)
    