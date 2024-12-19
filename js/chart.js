// Selección del contexto del canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Datos del gráfico
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [80, -80, 90, -70, -10, 20, -90],
            backgroundColor: '#ec6e85', // Color rojo con opacidad
        },
        {
            label: 'Dataset 2',
            data: [40, 60, 0, 0, -60, 10, -50],
            backgroundColor: '#579fe5', // Color azul con opacidad
        }
    ]
};

// Configuración del gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true,
                suggestedMin: -100,
                suggestedMax: 100
            }
        }
    }
};

// Creación del gráfico
const myChart = new Chart(ctx, config);
