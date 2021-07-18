function bmiCalculator (weight, height) {
    var bmi = Math.floor(weight / Math.pow(height,2));
    var interpretation = "Your BMI is " + bmi + ", ";
    if(bmi < 18.5){
        interpretation += "so you are underweight.";
    }
    else if(bmi >= 18.5 && bmi < 25){
        interpretation += "so you have a normal weight.";
    }
    else if(bmi >= 25 && bmi < 30){
        interpretation += "so you are overweight.";
    }
     else if(bmi >= 30 && bmi < 35){
        interpretation += "so you are overweight.";
    }
     else if(bmi >= 35){
        interpretation += "so you are extremely obese.";
    }
    return interpretation;
}

bmiCalculator(92, 1.77);