from flask import Flask, jsonify
app = Flask(__name__)

@app.get("/price/<sku>")
def price(sku):
    return jsonify(sku=sku, price=42)
