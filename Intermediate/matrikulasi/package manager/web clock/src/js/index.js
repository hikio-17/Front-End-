const displayTime = () => {
    moment.locale('id');
    document.querySelector('.time').innerText = moment().format('LTS');
    document.querySelector('.date').innerText = moment().format('LL');
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};

updateTime();