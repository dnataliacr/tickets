from distutils.log import debug
from flask import Flask

app = Flask(__name__)

@app.route("/tickets")

def tickets():
  return {"tickets": [{
        "ticketId": "xk3d03",
        "subject": "Hola, mi item esta roto",
        "date": "2020-03-01 01:30:00Z",
        "from": "Joaquin Perez",
        "status": "SOLVED",
        "body": "Mi producto llego roto, no funciona como deberia"
    },     {
        "ticketId": "xx35",
        "subject": "Hola, mi item no llego",
        "date": "2020-03-02 05:30:00Z",
        "from": "Romina Esperanto",
        "status": "New",
        "body": "Mi producto no llego, cuando deberia llegar?"
    }]}

if __name__ == "__main__":
    app.run(debug=True)