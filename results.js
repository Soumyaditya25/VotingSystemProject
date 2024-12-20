document.addEventListener('DOMContentLoaded', function () {
    function loadPollResults(pollId, chartType, chartElementId) {
        const userData = JSON.parse(localStorage.getItem('userPollData')) || {};
        const pollData = {};

        Object.keys(userData).forEach(userEmail => {
            const userPollResponses = userData[userEmail].pollResponses;
            if (userPollResponses && userPollResponses[pollId]) {
                const response = userPollResponses[pollId];
                pollData[response] = (pollData[response] || 0) + 1;
            }
        });

        const labels = Object.keys(pollData);
        const data = Object.values(pollData);

        const ctx = document.getElementById(chartElementId).getContext('2d');
        new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: `Poll Results for ${pollId}`
                    }
                }
            }
        });
    }

    ['poll1', 'poll2', 'poll3', 'poll4', 'poll5', 'poll6'].forEach(pollId => {
        loadPollResults(pollId, 'pie', `${pollId}ResultsChart`);
    });

    ['poll1', 'poll2', 'poll3','poll4', 'poll5', 'poll6'].forEach(pollId => {
        loadPollResults(pollId, 'bar', `${pollId}BarResultsChart`);
    });
});
