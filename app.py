from flask import Flask, render_template, request, jsonify
from utils.rag_engine import generate_itinerary
import requests

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/plan", methods=["POST"])
def plan():
    user_input = request.json["query"]
    response = generate_itinerary(user_input)
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
