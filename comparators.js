var lover1name = prompt("What is your name ?");
var lover2name = prompt("What is the name of the person you love ?");
var loveMetric = Math.floor(Math.random() * 100) + 1; // 1 - 100

if(loveMetric > 70){
alert("Your love metric is " + loveMetric + "%" + "\nYou love yourselves as Kanye loves Kanye.");
}
else if(loveMetric > 30 && loveMetric <= 70){
alert("Your love metric is " + loveMetric + "%" );
}
else if(loveMetric <= 30){
alert("Your love metric is " + loveMetric + "%." + "\nYou go together like oil and water");
}
