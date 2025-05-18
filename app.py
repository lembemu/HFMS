from flask import Flask, jsonify

app = Flask(__name__)

# --- Dummy Data (Replace with database interactions in a real application) ---

crucial_diagnoses_data = {
    'hypertension': {'count': 150, 'trend': 'up'},
    'diabetes': {'count': 120, 'trend': 'stable'},
    'malaria': {'count': 95, 'trend': 'down'},
    'respiratory_infection': {'count': 180, 'trend': 'up'}
}

patient_statistics_data = {
    'total_patients': 550,
    'new_patients': 50,
    'returning_patients': 500,
    'demographics': {
        'male': 280,
        'female': 270,
        'age_groups': {
            '0-18': 100,
            '19-60': 350,
            '61+': 100
        }
    }
}

monthly_reports_data = {
    'may_2025': {
        'summary': 'Increased patient visits due to seasonal illnesses.',
        'diagnosis_trends': {'malaria': 'increased', 'common_cold': 'significantly increased'},
        'treatment_outcomes': '95% success rate across all treatments.'
    },
    'april_2025': {
        'summary': 'Stable patient volume.',
        'diagnosis_trends': {'hypertension': 'slightly decreased'},
        'treatment_outcomes': '92% success rate.'
    }
}

user_data = [
    {'id': 1, 'username': 'admin', 'role': 'administrator'},
    {'id': 2, 'username': 'nurse1', 'role': 'nurse'},
    {'id': 3, 'username': 'doctor2', 'role': 'doctor'}
]

system_config = {
    'facility_name': 'Central Health Clinic',
    'currency': 'MWK',
    'appointment_slots': 'Every 30 minutes'
}

# --- API Endpoints ---

@app.route('/api/dashboard/crucial_diagnoses', methods=['GET'])
def get_crucial_diagnoses():
    """Returns data for crucial diagnoses graphs."""
    return jsonify(crucial_diagnoses_data)

@app.route('/api/reports/patient_statistics', methods=['GET'])
def get_patient_statistics():
    """Returns patient statistics data."""
    return jsonify(patient_statistics_data)

@app.route('/api/reports/monthly', methods=['GET'])
def get_monthly_reports():
    """Returns monthly reports data."""
    return jsonify(monthly_reports_data)

@app.route('/api/admin/users', methods=['GET'])
def get_users():
    """Returns a list of users."""
    return jsonify(user_data)

@app.route('/api/admin/config', methods=['GET'])
def get_config():
    """Returns system configuration."""
    return jsonify(system_config)

if __name__ == '__main__':
    app.run(debug=True)