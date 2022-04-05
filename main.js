// jquery equivalent of CREATE element
let div = $('<div>Hello world!</div>');

// SELECT an element
let body = $('body');

//jquery equivalent of appendChild
//inserts element in () parens inside of element in front of .
body.append(div);



//trying challenge 2
let chart = $('#myChart');


let labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

let data = {
    labels: labels,
    datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

let config = {
    type: 'line',
    data: data,
    options: {}
};


//jquery equivalent of addEventListener
div.on('click', function(){
    alert("Hello world!");
    console.log('It is working!');
});







  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



//second chart
let secondChart = $('#secondChart');



let myChart2 = new Chart(secondChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Favorites',
            data: [5, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 