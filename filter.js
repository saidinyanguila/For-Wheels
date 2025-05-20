const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let dates = document.getElementById('s_date');
let monthsSelect = document.getElementById('s_month');
let date = new Date();

for (let i = 1; i <= 31; i++) {
    let opt = document.createElement('option')
    opt.value = i;
    opt.innerHTML = i;
    dates.append(opt);

    if (i == date.getDate()+1) {
        opt.selected = true;
    }
}

for (let i = date.getMonth(); i < months.length; i++) {
    let opt = document.createElement('option')
    opt.value = i;
    opt.innerHTML = months[i];
    monthsSelect.append(opt);
    
}

const manufacturers = [
    'Audi',
    'Toyota',
    'Rolls-Royce',
    'Ford',
    'BMW',
    'Volkswagen',
    'Honda', 
    'Mazda',
    'Tesla',
    'Nissan',
    'Chevrolet',
    'Mercedes',
    'Renault',
    'Subaru',
    'Suzuki',
    'Porsche'
]

let cars = document.getElementById('make');
manufacturers.sort();

for (let i = 0; i < manufacturers.length; i++) {
    let opt = document.createElement('option')
    opt.value = manufacturers[i];
    opt.innerHTML = manufacturers[i];
    cars.append(opt);
    
}