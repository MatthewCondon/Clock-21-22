/**
*Please Note:
*Console may throw an error when running until you input a location. 
*Simply input a location, and the error will disappear
*
*Coded with hard numbers, no scaled.
*/

var scaled = 800;

var curHour;
var timeZoneDifference;
var curMin;
var curSec;

var domain1 = "https://api.openweathermap.org/data/2.5/find?q=";
var apikey1 = "&appid=14a2a7748a187b3daae5a147e49edc27";
var city = "";
var units1 = "&units=imperial";
var url1;
var userinput;
var button;
var weatherData;
var temp = "Not Set";
var timeData;

var backImg;
var stuffBack;
var bellImg;

var bellXPos = 95;
var bellYPos = 25;
var bellSize = 150;

var yearXPos = 555;
var yearYPos = 250;
var yearLength = 200;

var clockXPos = 170;
var clockYPos = 350;
var clockRadius = 250;

var hLength = 50;
var mLength = 75;
var sLength = 100;

var monthXPos = 450;
var monthYPos = 100;
var monthRadius = 150;
var moLength = 50;

var dayXPos = 650;
var dayYPos = 100;
var dayRadius = 150;
var dLength = 50;

var timeXPos = 450;
var timeYPos = 400;
var timeRadius = 150;
var tLength = 50;

var weatherXPos = 650;
var weatherYPos = 400;
var weatherRadius = 150;
var wLength = 50;

var bellSound;
var bellBoolean = false;

function preload() {
  backImg = loadImage("wood.png");
  stuffBack = loadImage("backs.png");
  bellImg = loadImage("bell.png");
  //bellSound = loadSound("bellhigh.wav"); //Bell Crashes System...
}

function setup() {
  createCanvas(scaled, scaled - 300);
  userinput = createInput();
  button = createButton("Set Location");
  button.mousePressed(makeRequest);
  
  monthVar = new Misc(monthXPos, monthYPos, monthRadius);
  dayVar = new Misc(dayXPos, dayYPos, dayRadius);
  timeVar = new Misc(timeXPos, timeYPos, timeRadius);
  weatherVar = new Misc(weatherXPos, weatherYPos, weatherRadius);
  bell = new Misc(bellXPos, bellYPos, bellSize);
  yearMark = new Misc(yearXPos, yearYPos, yearLength);
  curHour = hour();
  curMin = minute();
  curSec = second();
}

function makeRequest(){
  city = userinput.value();
  url1 = domain1+city+units1+apikey1;
  loadJSON(url1, getData);
}

function getData(data){
  weatherData = data;
  timeData = data;
  //console.log(timeData);
  //time = timeData;
}

function draw() {
  background(backImg);
  makeClock(clockXPos, clockYPos, clockRadius);
  monthVar.showMonth();
  dayVar.showDay();
  timeVar.showTime();
  weatherVar.showWeather();
  bell.displayBell();
  yearMark.displayBracket();
  //bellRing();
}

function bellRing(){
  //Bell Crashes System...
  /*
    https://www.chelseaclock.com/blog/chiming-decoding-ships-bell-clock-code

    First Watch: 8:00 p.m. to 12:00 a.m.
    Mid-Watch (also Black Watch): 12:00 a.m. to 4:00 a.m.
    Morning Watch: 4:00 a.m. to 8:00 a.m.
    Forenoon Watch: 8:00 a.m. to 12:00 p.m.
    Afternoon Watch: 12:00 p.m. to 4:00 p.m.
    Evening Watch: 4:00 p.m. to 8:00 p.m.


    8 bells: 12:00, 4:00,  8:00
    1 bell: 12:30, 4:30, 8:30
    2 bells: 1:00, 5:00, 9:00
    3 bells: 1:30, 5:30, 9:30
    4 bells: 2:00, 6:00, 10:00
    5 bells: 2:30, 6:30, 10:30
    6 bells: 3:00, 7:00, 11:00
    7 bells: 3:30, 7:30, 11:30
  */
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 30 && second()===00) bellBoolean=true;
//   if(curHour===1 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===1 && curMin === 30 && second()===00) bellBoolean=true;
//   if(curHour===2 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===2 && curMin === 30 && second()===00) bellBoolean=true;
//   if(curHour===3 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===3 && curMin === 30 && second()===00) bellBoolean=true;
  
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 30 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
  
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 30 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
//   if(curHour===12 && curMin === 00 && second()===00) bellBoolean=true;
  
//   if(bellBoolean){
//     bellSound.play();
//     bellBoolean=false;
//   }
}

function makeClock(x, y, r) {
  var h; // = hour();
  var m; // = minute();
  var s; // = second();

  this.x = x;
  this.y = y;
  this.r = r;
  
  if (weatherData){
    place = weatherData.list[0].name
    temp = weatherData.list[0].main.temp;
    time = weatherData.list[0].main.time;
  }
  if(timeData) time = weatherData.list[0].name.time;

  h = map(curHour + norm(curMin, 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI; //this line taken from p5js example
  m = map(curMin, 0, 60, -HALF_PI, HALF_PI * 3);
  s = map(second(), 0, 60, -HALF_PI, HALF_PI * 3);
  //console.log(m);

  fill("white");
  strokeWeight(20);
  stroke("gold");
  ellipse(this.x, this.y, this.r, this.r);

  strokeWeight(2);
  stroke("black");

  var hx = cos(h) * hLength;
  var hy = sin(h) * hLength;
  line(this.x, this.y, this.x + hx, this.y + hy);

  var mx = cos(m) * mLength;
  var my = sin(m) * mLength;
  line(this.x, this.y, this.x + mx, this.y + my);

  stroke("grey");
  var sx = cos(s) * sLength;
  var sy = sin(s) * sLength;
  line(this.x, this.y, this.x + sx, this.y + sy);

  fill("black");
  noStroke();
  textFont("Georgia");
  textSize(10);
  text("Chelsea Clock Co.", this.x - 40, this.y + 35);

  textSize(20);

  text("1", this.x + 45, this.y - 80);
  text("2", this.x + 80, this.y - 45);
  text("3", this.x + 95, this.y + 5);

  text("4", this.x + 80, this.y + 55);
  text("5", this.x + 45, this.y + 90);
  text("6", this.x - 5, this.y + 105);

  text("7", this.x - 55, this.y + 90);
  text("8", this.x - 95, this.y + 55);
  text("9", this.x - 105, this.y + 5);

  text("10", this.x - 95, this.y - 45);
  text("11", this.x - 60, this.y - 80);
  text("12", this.x - 10, this.y - 90);
  /////////////////////////////////////
  textSize(10);
  text("13", this.x + 35, this.y - 70);
  text("14", this.x + 65, this.y - 35);
  text("15", this.x + 75, this.y + 4);

  text("16", this.x + 65, this.y + 48);
  text("17", this.x + 35, this.y + 70);
  text("18", this.x - 5, this.y + 80);

  text("19", this.x - 45, this.y + 70);
  text("20", this.x - 75, this.y + 48);
  text("21", this.x - 85, this.y + 4);

  text("22", this.x - 73, this.y - 38);
  text("23", this.x - 47, this.y - 70);
  text("00", this.x - 6, this.y - 80);
}

class Misc {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  showMonth() {
    var mo; //= month();

    mo = map(month(), 0, 12, -HALF_PI, HALF_PI * 3);
    fill("white");

    strokeWeight(10);
    stroke("gold");
    ellipse(this.x, this.y, this.r, this.r);

    strokeWeight(2);
    stroke("black");
    var mox = (cos(mo) * monthRadius) / 2.7;
    var moy = (sin(mo) * monthRadius) / 2.7;
    line(this.x, this.y, this.x + mox * 1.1, this.y + moy * 1.1);
    fill("black");
    noStroke();
    textSize(15);
    text("Month: " + month(), this.x - 30, this.y + 20);

    /*
    textSize(10);

        text("1", this.x + 45, this.y - 80);
        text("2", this.x + 80, this.y - 45);
        text("3", this.x + 55, this.y + 5);

        text("4", this.x + 80, this.y + 55);
        text("5", this.x + 45, this.y + 90);
        text("6", this.x - 3, this.y + 60);

        text("7", this.x - 55, this.y + 90);
        text("8", this.x - 95, this.y + 55);
        text("9", this.x - 60, this.y + 5);

        text("10", this.x - 95, this.y - 45);
        text("11", this.x - 60, this.y - 80);
        text("12", this.x - 5, this.y - 60);
    */
    strokeWeight(1);
    textSize(8);
    fill("black");
    strokeWeight(2);
    beginShape(POINTS);

    for (var a = 0; a < 360; a += 30) {
      var angle = radians(a);
      // var x = monthXPos + cos(angle) * monthRadius;
      // var y = monthXPos + sin(angle) * monthRadius;
      var x = monthXPos - 2 + cos(angle) * moLength * 1.25;
      var y = monthXPos - 348 + sin(angle) * moLength * 1.25;
      //translate(450,100);
      fill("black");
      //textSize(40);
      if (a === 0) text("3", x, y);
      if (a === 30) text("4", x, y);
      if (a === 60) text("5", x, y);
      if (a === 90) text("6", x, y);
      if (a === 120) text("7", x, y);
      if (a === 150) text("8", x, y);
      if (a === 180) text("9", x, y);
      if (a === 210) text("10", x, y);
      if (a === 240) text("11", x, y);
      if (a === 270) text("12", x, y);
      if (a === 300) text("1", x, y);
      if (a === 330) text("2", x, y);

      //console.log(x);
    }
    endShape();
  }
  showDay() {
    var d = day();

    d = map(d, 0, 31, -HALF_PI, HALF_PI * 3);
    fill("white");

    strokeWeight(10);
    stroke("gold");
    ellipse(this.x, this.y, this.r, this.r);

    strokeWeight(2);
    stroke("black");
    var dx = cos(d) * dLength;
    var dy = sin(d) * dLength;
    line(this.x, this.y, this.x + dx * 1.1, this.y + dy * 1.1);
    fill("black");
    noStroke();
    textSize(15);
    text("Day: " + day(), this.x - 25, this.y + 20);

    strokeWeight(1);
    textSize(8);
    fill("black");
    beginShape(POINTS);
    for (var a = 0; a < 360; a += 11.6) {
      var angle = radians(a);
      var x = dayXPos + (cos(angle) * dayRadius) / 2.3 - 4;
      var y = dayYPos + (sin(angle) * dayRadius) / 2.3 + 2;
      if (a === 0) text("8", x, y);
      if (a === 11.6) text("9", x, y);
      if (a === 23.2) text("10", x, y);
      if (a === 34.8) text("11", x, y);
      if (a === 46.4) text("12", x, y);
      if (a === 58) text("13", x, y);
      if (a === 69.6) text("14", x, y);
      if (a === 81.19999999999999) text("15", x, y);
      if (a === 92.79999999999998) text("16", x, y);
      if (a === 104.39999999999998) text("17", x, y);
      if (a === 115.99999999999997) text("18", x, y);
      if (a === 127.59999999999997) text("19", x, y);
      if (a === 139.19999999999996) text("20", x, y);
      if (a === 150.79999999999995) text("21", x, y);
      if (a === 162.39999999999995) text("22", x, y);
      if (a === 173.99999999999994) text("23", x, y);
      if (a === 185.59999999999994) text("24", x, y);
      if (a === 197.19999999999993) text("25", x, y);
      if (a === 208.79999999999993) text("26", x, y);
      if (a === 220.39999999999992) text("27", x, y);
      if (a === 231.99999999999991) text("28", x, y);
      if (a === 243.5999999999999) text("29", x, y);
      if (a === 255.1999999999999) text("30", x, y);
      if (a === 266.7999999999999) text("31", x, y);
      if (a === 278.3999999999999) text("1", x, y);
      if (a === 289.99999999999994) text("2", x, y);
      if (a === 301.59999999999997) text("3", x, y);
      if (a === 313.2) text("4", x, y);
      if (a === 324.8) text("5", x, y);
      if (a === 336.40000000000003) text("6", x, y);
      if (a === 348.00000000000006) text("7", x, y);

      //console.log(a);
    }
    endShape();
  }
  showTime() {
var hCheck = curHour;
    //fill("white");
    if (hCheck >= 5 && hCheck < 12) {//morning
      fill(235, 185, 160);
    }
    if (hCheck >= 12 && hCheck < 16) {//afternoon
      fill(51, 170, 255);
    }
    if (hCheck >= 16 && hCheck < 20) {//evening
      fill(176, 46, 37);
    }
    if (hCheck >= 20 && hCheck < 5) {//night
      fill("black");
    }

    strokeWeight(10);
    stroke("gold");
    ellipse(this.x, this.y, this.r, this.r);

    noStroke();
    fill("white");
    textSize(15);
    var stringTime;
    var arr = ["MORNING", "AFTERNOON", "EVENING", "NIGHT"];
    if (hCheck >= 5 && hCheck < 12) {
      text("It is: " + arr[0], timeXPos - 55, timeYPos + 5); //morning
      fill(235, 185, 160);
    }
    if (hCheck >= 12 && hCheck < 16) {
      text("It is: " + arr[1], timeXPos - 63, timeYPos + 5); //afternoon
      fill(51, 170, 255);
    }
    if (hCheck >= 16 && hCheck < 20) {
      text("It is: " + arr[2], timeXPos - 52, timeYPos + 5); //evening
      fill(176, 46, 37);
    }
    if (hCheck >= 20 && hCheck < 5) {
      text("It is: " + arr[3], timeXPos - 43, timeYPos + 5); //night
      fill("white");
    }
  }
  showWeather() {
    fill("white");
    strokeWeight(10);
    stroke("gold");
    ellipse(this.x, this.y, this.r, this.r);
    
    var t;
    if(temp==="Not Set") t = map(-1*0,0,180,0,-PI)-PI;
    if(temp > 0 || temp < 0) t = map(-1*temp,0,180,0,-PI)-PI;
  
    strokeWeight(2);
    stroke("red");
    line(weatherXPos,weatherYPos,weatherXPos+cos(t)*weatherRadius/2.5, weatherYPos+sin(t)*weatherRadius/2.5);
    noStroke();
    fill("black");
    textSize(15);
    //text("Weather: \n" + weath, weatherXPos-45,weatherYPos+40);
    text("Temperature: \n         " + temp + "º", weatherXPos-45, weatherYPos+25);
  }
  displayBell() {
    image(bellImg, this.x, this.y, this.r, this.r); // this.r = size in this instance
    
    // if(curHour===19 && curMin === 56 && second()===25) {
    // bellSound.play();
  //}
  }
  displayBracket() {
    rectMode(CENTER);
    //noStroke();
    stroke(173, 147, 16);
    strokeWeight(10);
    fill("gold");
    rect(this.x, this.y, this.r * 2, this.r / 2,5);

    noStroke();
    fill(173, 147, 16);
    textSize(50);
    text("Year: " + year(), this.x - 115, this.y + 15);
  }
}
