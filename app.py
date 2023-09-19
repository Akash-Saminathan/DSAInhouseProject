from flask import Flask, render_template, url_for, request, send_file
import pandas as pd
from io import BytesIO 
from reportlab.pdfgen import canvas


app = Flask(__name__)



@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == "POST":
        csv_file = request.files['csv_file']
        if csv_file:
            df = pd.read_csv(csv_file)
            pdf = generate_pdf(df)
            return send_file(pdf, as_attachment=True, download_name='output.pdf', mimetype='application/pdf')
    return render_template("index.html")

def generate_pdf(df):
    buffer = BytesIO()
    p = canvas.Canvas(buffer)
    p.save()
    buffer.seek(0)
    return buffer

if __name__ == "__main__":
    app.run(debug=True)
