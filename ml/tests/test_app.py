import pytest
from ..app import app  # Using a relative import

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_predict_endpoint(client):
    response = client.post('/predict', json={
        "text": "The product is fantastic and works like a charm.",
        "model": "logistic_regression"
    })
    data = response.get_json()
    assert response.status_code == 200
    assert "prediction" in data
