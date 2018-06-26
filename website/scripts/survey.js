var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];

defaultThemeColors["$main-color"] = "#00aef0";
defaultThemeColors["$header-background-color"] = "#f8f8f8";
defaultThemeColors["$main-hover-color"] = "#006a90";
defaultThemeColors["$border-color"] = "#c9c9c9";
defaultThemeColors["$text-color"] = "#111";

Survey
    .StylesManager
    .applyTheme();

var surveyJSON = {pages:[{name:"page1",elements:[{type:"html",name:"question5",html:"<p style=\"font-size: 18px\">Thank you for considering TestCafé Studio for your QA/Application testing needs.</p><p style=\"font-size: 18px\">Please take a moment to answer the following questions. Your feedback will help us improve existing features and uncover weaknesses that must be addressed prior to the launch of TestCafé Studio.</p>"},{type:"comment",name:"question1",title:"If given carte blanche, how would you improve TestCafé Studio? What are its major weaknesses? What can we improve to make your life as a tester easier?"},{type:"radiogroup",name:"question2",title:"Based on its current feature set and core functionality, do you consider TestCafé Studio useful and would you be willing to purchase it once released?",choices:[{value:"willBuy",text:"Yes, I’d buy TestCafé Studio right now."},{value:"wontBuy",text:"No, I would not buy TestCafé Studio right now."}]},{type:"comment",name:"question3",visibleIf:"{question2} = \"wontBuy\"",title:"Please tell us why you feel the product is not ready or why you would be unwilling to purchase it as it stands?"},{type:"radiogroup",name:"question4",title:"Which of the following describes your organizational role?",hasOther:true,choices:[{value:"dev",text:"Developer"},{value:"qa",text:"QA engineer"},{value:"manager",text:"Manager"}],otherText:"Other"}]}]}


function sendDataToServer(survey) {
    survey.sendResult('71291f50-3920-411d-a19b-d77a30454393');
}

function competeSurvey(survey) {
    $('#surveyHeader').css('display', 'none');
    sendDataToServer(survey);
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: competeSurvey
});