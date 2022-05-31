var depurateDateEntry = prompt("Enter a date in the format DD/MM/YYYY");

var depurateDate = moment(depurateDateEntry, "DD/MM/YYYY");

var today = moment();

var dateDiff = depurateDate - today;

var chosenOption = prompt("Escolha uma opção: \n 1 - seconds\n 2 - minuts\n 3 - hours\n 4 - days ");

if (chosenOption == 1) {
    var secondsOfDepature = Math.round(dateDiff / 1000);
    alert('Tempo de voo: ' + secondsOfDepature + ' segundos');
} else if (chosenOption == 2) {
    var minutesOfDepature = Math.round(dateDiff / 60000);
    alert('Tempo de voo: ' + minutesOfDepature + ' minutos');
} else if (chosenOption == 3) {
    var hoursOfDepature = Math.round(dateDiff / 3600000);
    alert('tempo de voo: ' + hoursOfDepature + ' horas');
} else if (chosenOption == 4) {
    var daysOfDepature = Math.round(dateDiff / 86400000);
    alert('Tempo de voo: ' + daysOfDepature + ' dias');
} else {
    alert("Opção inválida");
}