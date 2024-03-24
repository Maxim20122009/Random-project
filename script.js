var rnumber;
var rtries;
limit = 10;
function random()
{
today = new Date();
num = today.getTime();
num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limit;
return num;
}

function init() {
rnumber = random();
console.log(rnumber);
rtries = 0;
document.fgame.output.value='Угадай число от 0 до ' + (limit-1) +'...';
document.fgame.tries.value=rtries;
document.fgame.highlow.value='';
document.fgame.input.value='';
}

function game(number) {
if (number==rnumber)
{
rtries++;
document.fgame.output.value='Вы догадались' + rtries + ' попытки! Это было '
+ rnumber + '! Нажмите "Старт", чтобы играть снова.';
document.fgame.highlow.value='ПРАВИЛЬНО!';
}
else {
    rtries++;
    document.fgame.output.value='Нет, ' + number + ' - это не то число, о котором я думаю!';
    document.fgame.highlow.value=(rnumber > number) ? 'Больше!' : 'Поменьше!';
    document.fgame.tries.value=rtries;
	}
  }