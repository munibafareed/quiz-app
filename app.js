function check(){
    var score = 0
    var right_answer_1 = document.getElementById("q1-a1");
    var q2_answer_1 = document.getElementById("q1-a2");
    var q3_answer_1 = document.getElementById("q1-a3");
    if(right_answer_1.checked == true){
        score ++
        alert("Q1 answer is right")

    }else{
        alert("Q1 answer is wrong")

    }


    var right_answer_2 = document.getElementById("q2-a2");
    var q1_answer_2 = document.getElementById("q2-a1");
    var q3_answer_2 = document.getElementById("q2-a3");
    if(right_answer_2.checked == true){
        score ++
        alert("Q2 answer is right")

    }else{
        alert("Q2 answer is wrong")

    }


    var right_answer_3 = document.getElementById("q3-a3");
    var q1_answer_3 = document.getElementById("q3-a1");
    var q2_answer_3 = document.getElementById("q3-a2");
    if(right_answer_3.checked == true){
        score ++
        alert("Q3 answer is right")

    }else{
        alert("Q3 answer is wrong")

    }


    var right_answer_1 = document.getElementById("q4-a1");
    var q2_answer_4 = document.getElementById("q4-a2");
    var q3_answer_4 = document.getElementById("q4-a3");
    if(right_answer_1.checked == true){
        score ++
        alert("Q4 answer is right")

    }else{
        alert("Q4 answer is wrong")

    }
    alert("your correct answer is" + score++ + ' /4')



}