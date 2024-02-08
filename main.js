document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmiForm');

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const age = parseFloat(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        const bmi = weight / ((height / 100) ** 2);
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
        } else if (bmi >= 30) {
            status = 'Obese';
        }

        document.getElementById('resultBMI').textContent = bmi.toFixed(2);
        document.getElementById('resultStatus').textContent = status;
    };
});
