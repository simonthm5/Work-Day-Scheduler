

    renderLastRegistered();
    renderLastRegisteredTen();
    renderLastRegisteredEl();
    renderLastRegisteredNoon();
    renderLastRegisteredOne();
    renderLastRegisteredTwo();
    renderLastRegisteredThree();
    renderLastRegisteredFour();
    renderLastRegisteredFive();

    function renderLastRegistered() {
      var textValue = localStorage.getItem("actionPlan9");
      document.getElementById("hour-nine").textContent = textValue;
    };

    $("#butNine").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#hour-nine").val()
      console.log(textValue);
      localStorage.setItem("actionPlan9", textValue);
      renderLastRegistered();
    });

    // 10 am//

    function renderLastRegisteredTen() {
      var textValue = localStorage.getItem("actionPlanTen");
      document.getElementById("ten").textContent = textValue;
    };

    $("#butTen").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#ten").val()
      console.log(textValue);
      localStorage.setItem("actionPlanTen", textValue);
      renderLastRegisteredTen();
    });

    //11 am//
    
    function renderLastRegisteredEl() {
      var textValue = localStorage.getItem("actionPlanEl");
      document.getElementById("eleven").textContent = textValue;
    };

    $("#butEl").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#eleven").val()
      console.log(textValue);
      localStorage.setItem("actionPlanEl", textValue);
      renderLastRegisteredEl();
    });

    // noon//

    function renderLastRegisteredNoon() {
      var textValue = localStorage.getItem("actionPlanNoon");
      document.getElementById("noon").textContent = textValue;
    };

    $("#butNoon").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#noon").val()
      console.log(textValue);
      localStorage.setItem("actionPlanNoon", textValue);
      renderLastRegisteredNoon();
    });

    // 1pm//

    function renderLastRegisteredOne() {
      var textValue = localStorage.getItem("actionPlanOne");
      document.getElementById("one").textContent = textValue;
    };

    $("#butOne").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#one").val()
      console.log(textValue);
      localStorage.setItem("actionPlanOne", textValue);
      renderLastRegisteredOne();
    });


    // 2pm//

    function renderLastRegisteredTwo() {
      var textValue = localStorage.getItem("actionPlanTwo");
      document.getElementById("two").textContent = textValue;
    };

    $("#butTwo").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#two").val()
      console.log(textValue);
      localStorage.setItem("actionPlanTwo", textValue);
      renderLastRegisteredTwo();
    });

    //3 pm//

    function renderLastRegisteredThree() {
      var textValue = localStorage.getItem("actionPlanThree");
      document.getElementById("three").textContent = textValue;
    };

    $("#butThree").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#three").val()
      console.log(textValue);
      localStorage.setItem("actionPlanThree", textValue);
      renderLastRegisteredThree();
    });

    //4pm//

    function renderLastRegisteredFour() {
      var textValue = localStorage.getItem("actionPlanFour");
      document.getElementById("four").textContent = textValue;
    };

    $("#butFour").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#four").val()
      console.log(textValue);
      localStorage.setItem("actionPlanFour", textValue);
      renderLastRegisteredFour();
    });

    //5 pm//

    function renderLastRegisteredFive() {
      var textValue = localStorage.getItem("actionPlanFive");
      document.getElementById("five").textContent = textValue;
    };

    $("#butFive").on("click", function () {
      var classHour = $(this).attr("class").split(" ")[1];
      console.log(classHour);
      var textValue = $("#five").val()
      console.log(textValue);
      localStorage.setItem("actionPlanFive", textValue);
      renderLastRegisteredFive();
    });


    // get class using jquery//


    // function for coloring the rows based upon the current time
    // function timeColor{
    //   // if statement-- if current time is same as element row time display red background color
    //   // if a time block element is prior to current time dislpay back grey ground color
    //   //if a time block is in the future, display blue background color
    // };


  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

    var nineTime = document.getElementById("time9").setAttribute("datetime", moment('9:00am', 'h:mma'));
    var tenTime = document.getElementById("time10").setAttribute("datetime", moment('10:00am', 'h:mma'));
    var elevenTime = document.getElementById("time11").setAttribute("datetime", moment('11:00am', 'h:mma'));
    var twelveTime = document.getElementById("time12").setAttribute("datetime", moment('12:00am', 'h:mma'));
    var oneTime = document.getElementById("time1").setAttribute("datetime", moment('1:00pm', 'h:mma'));
    var twoTime = document.getElementById("time2").setAttribute("datetime", moment('2:00pm', 'h:mma'));
    var threeTime = document.getElementById("time3").setAttribute("datetime", moment('3:00pm', 'h:mma'));
    var fourTime = document.getElementById("time4").setAttribute("datetime", moment('4:00pm', 'h:mma'));
    var fiveTime = document.getElementById("time5").setAttribute("datetime", moment('5:00pm', 'h:mma'));

    var currentTime = moment();

    var nineTimeC = document.getElementById("time9").getAttribute("datetime");
    var tenTimeC = document.getElementById("time10").getAttribute("datetime");
    var elevenTimeC = document.getElementById("time11").getAttribute("datetime");
    var twelveTimeC = document.getElementById("time12").getAttribute("datetime");
    var oneTimeC = document.getElementById("time1").getAttribute("datetime");
    var twoTimeC = document.getElementById("time2").getAttribute("datetime");
    var threeTimeC = document.getElementById("time3").getAttribute("datetime");
    var fourTimeC = document.getElementById("time4").getAttribute("datetime");
    var fiveTimeC = document.getElementById("time5").getAttribute("datetime");

    var nineTimes = moment().isAfter(moment(nineTimeC));
    var tenTimes = moment().isAfter(moment(tenTimeC));
    var elevenTimes = moment().isAfter(moment(elevenTimeC));
    var twelveTimes = moment().isAfter(moment(twelveTimeC));
    var oneTimes = moment().isAfter(moment(oneTimeC));
    var twoTimes = moment().isAfter(moment(twoTimeC));
    var threeTimes = moment().isAfter(moment(threeTimeC));
    var fourTimes = moment().isAfter(moment(fourTimeC));
    var fiveTimes = moment().isAfter(moment(fiveTimeC));

    //9am color//

    function pastColor9() {
      var updatePast9 = document.getElementById("row9").setAttribute("class", "past row");
    };
    function futureColor9() {
      var updateFuture9 = document.getElementById("row9").setAttribute("class", "future row")
    };
    function presentColor9() {
      var updatePresent9 = document.getElementById("row9").setAttribute("class", "present row")
    };

    if (nineTimes) {
      pastColor9()
    }
    if (!nineTimes) {
      futureColor9()
    }

    //10am color//

    function pastColor10() {
      var updatePast10 = document.getElementById("row10").setAttribute("class", "past row");
    };
    function futureColor10() {
      var updateFuture10 = document.getElementById("row10").setAttribute("class", "future row")
    };
    function presentColor10() {
      var updatePresent10 = document.getElementById("row10").setAttribute("class", "present row")
    };

    if (tenTimes) {
      pastColor10()
    }
    if (!tenTimes) {
      futureColor10()
    };

    //11 am color

    function pastColor11() {
      var updatePast11 = document.getElementById("row11").setAttribute("class", "past row");
    };
    function futureColor11() {
      var updateFuture11 = document.getElementById("row11").setAttribute("class", "future row")
    };
    function presentColor11() {
      var updatePresent11 = document.getElementById("row11").setAttribute("class", "present row")
    };

    if (elevenTimes) {
      pastColor11()
    }
    if (!elevenTimes) {
      futureColor11()
    };

    //noon color //

    function pastColor12() {
      var updatePast12 = document.getElementById("row12").setAttribute("class", "past row");
    };
    function futureColor12() {
      var updateFuture12 = document.getElementById("row12").setAttribute("class", "future row")
    };
    function presentColor12() {
      var updatePresent12 = document.getElementById("row12").setAttribute("class", "present row")
    };

    if (twelveTimes) {
      pastColor12()
    }
    if (!twelveTimes) {
      futureColor12()
    };

    //1pm color//

    function pastColor1() {
      var updatePast1 = document.getElementById("row1").setAttribute("class", "past row");
    };
    function futureColor1() {
      var updateFuture1 = document.getElementById("row1").setAttribute("class", "future row")
    };
    function presentColor1() {
      var updatePresent1 = document.getElementById("row1").setAttribute("class", "present row")
    };

    if (oneTimes) {
      pastColor1()
    }
    if (!oneTimes) {
      futureColor1()
    };

    //2pm color//
    function pastColor2() {
      var updatePast2 = document.getElementById("row2").setAttribute("class", "past row");
    };
    function futureColor2() {
      var updateFuture2 = document.getElementById("row2").setAttribute("class", "future row")
    };
    function presentColor2() {
      var updatePresent2 = document.getElementById("row2").setAttribute("class", "present row")
    };

    if (twoTimes) {
      pastColor2()
    }
    if (!twoTimes) {
      futureColor2()
    };

    //3pm color//

    function pastColor3() {
      var updatePast3 = document.getElementById("row3").setAttribute("class", "past row");
    };
    function futureColor3() {
      var updateFuture3 = document.getElementById("row3").setAttribute("class", "future row")
    };
    function presentColor3() {
      var updatePresent3 = document.getElementById("row3").setAttribute("class", "present row")
    };

    if (threeTimes) {
      pastColor3()
    }
    if (!threeTimes) {
      futureColor3()
    };

    //4pm color//

    function pastColor4() {
      var updatePast4 = document.getElementById("row4").setAttribute("class", "past row");
    };
    function futureColor4() {
      var updateFuture4 = document.getElementById("row4").setAttribute("class", "future row")
    };
    function presentColor4() {
      var updatePresent4 = document.getElementById("row4").setAttribute("class", "present row")
    };

    if (fourTimes) {
      pastColor4()
    }
    if (!fourTimes) {
      futureColor4()
    };

    // 5pm color//

    function pastColor5() {
      var updatePast5 = document.getElementById("row5").setAttribute("class", "past row");
    };
    function futureColor5() {
      var updateFuture5 = document.getElementById("row5").setAttribute("class", "future row")
    };
    function presentColor5() {
      var updatePresent5 = document.getElementById("row5").setAttribute("class", "present row")
    };

    if (fiveTimes) {
      pastColor5()
    }
    if (!fiveTimes) {
      futureColor5()
    };

      // displayCent()
