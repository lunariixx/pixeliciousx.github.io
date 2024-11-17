function updateDateTime() {
    let now = new Date();
    
    let dateOptions = { timeZone: 'America/New_York', day: 'numeric', month: 'numeric', year: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('de-de', dateOptions);
    let timeOptions = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById('time').textContent = now.toLocaleTimeString('de-de', timeOptions);
}

updateDateTime();
setInterval(updateDateTime, 1000);
