var lover1name = prompt("What is your name ?");
var lover2name = prompt("What is the name of the person you love ?");
var loveMetric = Math.floor(Math.random() * 100) + 1; // 1 - 100

if(loveMetric > 70){
alert(lover1name + " loves " + loveMetric + "% "+ lover2name + ".\n"
+ "You love yourselves as Kanye loves Kanye.");
}else{
alert(lover1name + " loves " + loveMetric + "% "+ lover2name + ".");
}
