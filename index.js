var itemList= document.querySelector("#items");
var newDiv= document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText= document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container= document.querySelector('header .container');
var h1= document.querySelector('header h1');
newDiv.style.fontSize='30px'
container.insertBefore(newDiv, h1);


var seconedDiv= document.createElement('div');
var seconedDivText= document.createTextNode('Hello');
seconedDiv.appendChild(seconedDivText);
var container2= document.querySelector('#items');
var h2= document.querySelector('#item1');
container2.insertBefore(seconedDiv, h2);
seconedDiv.style.color='black';
seconedDiv.style.fontSize='25px';