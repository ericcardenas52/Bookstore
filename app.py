from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('registration.html')

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']

        return render_template('thank_you.html', username=username, email=email)

if __name__ == '__main__':
    app.run(debug=True)
