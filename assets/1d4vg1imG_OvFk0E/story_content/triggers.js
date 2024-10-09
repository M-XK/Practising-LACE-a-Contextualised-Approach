function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aGdUGz7fsp":
        Script1();
        break;
      case "5sYbGooUukl":
        Script2();
        break;
      case "6Aiq2jCBeAJ":
        Script3();
        break;
      case "6DRhdU7hgKr":
        Script4();
        break;
      case "6i2akuRXxxk":
        Script5();
        break;
      case "5bb7uyRmSAA":
        Script6();
        break;
      case "5bHIz5WnOjT":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('66To52LTSlE');
const duration = 750;
const easing = 'ease-out';
const id = '5oghowv8OR3';
const pulseAmount = 0.07;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6BWDoz5CWPh');
const duration = 750;
const easing = 'ease-out';
const id = '64yp2IaeF1I';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6pklrzGG9ZX');
const duration = 750;
const easing = 'ease-out';
const id = '6G9IUXQvBpN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5zFg8WScaHx');
const duration = 750;
const easing = 'ease-out';
const id = '6TKT4k83d5O';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5lc9CorIw9j');
const duration = 750;
const easing = 'ease-out';
const id = '5g8vwAN0J4u';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6IBzyZ25RPl');
const duration = 750;
const easing = 'ease-out';
const id = '6J4yw1xFTzK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6YNYz6lTue5');
const duration = 750;
const easing = 'ease-out';
const id = '6kt8JuaKBks';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 7250;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
