$(document).ready(function Schedule() {
    //setMonthAndDay(4, 1);
    /*
    var sMonth = -1;
    var sDay = -1;
    alert('Bclick');
    $("input").click(function()
    {
        var monthElement = document.getElementById("month");
        var month = monthElement.value;
        var dayElement = document.getElementById("day");
        var day = dayElement.value;
        sMonth = parseInt(month);
        sDay = parseInt(day);
        setMonthAndDay(sMonth, sDay);
        alert('click');
    });
    alert('Aclick');
    */
    //alert(sMonth);
    
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>電影</th></tr>");
    function workday()
    {
        var topicCount = topic.length;
    
        var secondUnit = 1000;
        var minuteUnit = secondUnit * 60;
        var hourUnit = minuteUnit * 60;
        var dayUnit = hourUnit * 24;

        for(var x=0; x<topicCount; x++)
        {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append("<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            if(topic[x]=="不開放")
            {
                $("#courseTable").append("<td><font color=\"gray\">"+topic[x]+"</td>");
            }
            else
            {
                $("#courseTable").append("<td><font color=\"black\">"+topic[x]+"</td>");       
            }
            $("#courseTable").append("<tr>");
        }
    }
    workday();

    $("#stB").click(function()
    {
        var sV = new Date(document.getElementById("stD").value);
        var D = sV.getDate();
        var M = sV.getMonth()+1;
        if(sV.length != 0)
        {
            setMonthAndDay(M, D);
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>電影</th></tr>");
            workday();
        }
        else
        {
            alert("Error Code 1000XX")
        }
    })

    $("#stE").click(function()
    {
        if($("#newEvent").val()!=0)
        {
            topic.push($("#newEvent").val());
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>電影</th></tr>");
            workday();
        }
        else
        {
            alert("Invalid input");
        }
    })
     //alert(typeof(topic));
    

    

});