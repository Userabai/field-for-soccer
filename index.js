
const canvas =  document.getElementById('asteroids');

const ctx = canvas.getContext('2d');


ctx.strokeStyle = 'dimgrey';

ctx.fillStyle = 'blue';

ctx.lineWidth = 223;

ctx.rect(123,22,42,32);

ctx.stroke();

ctx.fill();


// title player

ctx.font = '10px Arial'

ctx.fillStyle = '#fff';

ctx.lineWidth = 0.75;

ctx.textAlign = 'center';


let score = 'Score:';

let scorePoint = '200';

ctx.fillText(score,canvas.width / 7 , 24);


let time = 'Time:'

ctx.fillText(time,canvas.width / 7 , 40);


let check = 'Player';

ctx.font = '10px Arial';

ctx.fillStyle = 'red'

ctx.fillText(check,canvas.width / 2.10,18);



// stick content

ctx.strokeStyle = '#FFFFFF';

ctx.lineWidth = 3;

ctx.beginPath();

// person head start

ctx.arc(140,80,8,0,Math.PI * 2);

// person head start


// person body start

ctx.moveTo(140,89);

ctx.lineTo(140,110);

ctx.stroke();

// person body end


//left hand of person start

ctx.beginPath();

ctx.moveTo(140,90);

ctx.lineTo(120,100);

ctx.stroke();


//left hand of person end

ctx.beginPath();

ctx.moveTo(160,90);

ctx.lineTo(140,92);

ctx.stroke();


//right hand of person start



//right foot of person end

ctx.beginPath();

ctx.moveTo(140,110);

ctx.lineTo(150,127);

ctx.stroke();

//right foot of person start



// left foot of person end

ctx.beginPath();

ctx.moveTo(140,110);

ctx.lineTo(130,127);

ctx.stroke();

// left foot of person start


// second person start

//head start

ctx.beginPath();

ctx.arc(210,80,8,0,Math.PI * 2);

// head end

// body start

ctx.moveTo(210,88);

ctx.lineTo(210,115);



// body end


//left hand start

ctx.moveTo(210,92);

ctx.lineTo(190,103);

//left hand start



//right hand start

ctx.moveTo(230,92);

ctx.lineTo(190,103);

// right hand start


// left foot start

ctx.moveTo(210,113);

ctx.lineTo(200,126);

// left foot end


// right foot start

ctx.moveTo(210,113);

ctx.lineTo(224,126);

// rightt foot end


ctx.stroke();
// second person start

































