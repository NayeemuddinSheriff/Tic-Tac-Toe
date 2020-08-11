var div0 = document.createElement('div');
div0.setAttribute('class','board');
document.body.appendChild(div0);

var h = document.createElement('b');
h.setAttribute('class','header')
h.innerText="TIC TAC TOE";
div0.appendChild(h);

//ROW1 STARTS
var div1 = document.createElement('div');
div1.setAttribute('id','row1');
div0.appendChild(div1);

var div1_1 = document.createElement('div');
div1_1.setAttribute('onClick','play(this,1);');
div1_1.innerHTML=" ";
div1.appendChild(div1_1);

var div1_2 = document.createElement('div');
div1_2.setAttribute('onClick','play(this,2);');
div1_2.innerHTML=" ";
div1.appendChild(div1_2);

var div1_3 = document.createElement('div');
div1_3.setAttribute('onClick','play(this,4);');
div1_3.innerHTML=" ";
div1.appendChild(div1_3);

//ROW2 STARTS
var div2 = document.createElement('div');
div2.setAttribute('id','row2');
div0.appendChild(div2);

var div2_1 = document.createElement('div');
div2_1.setAttribute('onClick','play(this,8);');
div2_1.innerHTML=" ";
div2.appendChild(div2_1);

var div2_2 = document.createElement('div');
div2_2.setAttribute('onClick','play(this,16);');
div2_2.innerHTML=" ";
div2.appendChild(div2_2);

var div2_3 = document.createElement('div');
div2_3.setAttribute('onClick','play(this,32);');
div2_3.innerHTML=" ";
div2.appendChild(div2_3);

//ROW3 STARTS
var div3 = document.createElement('div');
div3.setAttribute('id','row3');
div0.appendChild(div3);

var div3_1 = document.createElement('div');
div3_1.setAttribute('onClick','play(this,64);');
div3_1.innerHTML=" ";
div3.appendChild(div3_1);

var div3_2 = document.createElement('div');
div3_2.setAttribute('onClick','play(this,128);');
div3_2.innerHTML=" ";
div3.appendChild(div3_2);

var div3_3 = document.createElement('div');
div3_3.setAttribute('onClick','play(this,256);');
div3_3.innerHTML=" ";
div3.appendChild(div3_3);

//FOOTER STARTS
var div4 = document.createElement('div');
div4.setAttribute('id','row4');
div0.appendChild(div4);

var h = document.createElement('span');
h.setAttribute('class','header');
h.setAttribute('id','winner');
div4.appendChild(h);

//RESTART BUTTON
var div5 = document.createElement('div');
div5.setAttribute('id','row4');
div0.appendChild(div5);

var btn = document.createElement('button');
btn.setAttribute('onclick','document.location.reload()');
btn.innerText='RESTART';
div5.appendChild(btn);