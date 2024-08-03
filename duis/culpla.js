const options = {
    scales: {
        yAxes: [{
            ticks: {
                min: -10,
                max: 10,
                callback: function(value) {
                    if (value === 0) {
                        return 'Zero';
                    }
                    return value;
                }
            }
        }]
    }
};
