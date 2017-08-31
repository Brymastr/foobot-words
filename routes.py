from flask import Blueprint, request, Response
import words

api = Blueprint('textGenerator', __name__)


@api.route("/", methods=['POST'])
def generate():
    result = words.generateText()
    return ' '.join(result)


@api.route("/", methods=['GET'])
def hello():
    return "Hello World!"
