/**
 * Created by Ariadne on 16/3/24.
 */
$(function () {

    var cName = "";
    var colors =["green","red","blue"];
    var nowColors = [];



    var change = function () {
        for(var i = 1 ; i<= 9 ; i++){

            var num = Math.floor(Math.random()*(4-1));
            cName = $(".box"+i).attr("class").substr(9,20).trim();
            if(cName == ""||cName==undefined){
                $(".box"+i).addClass(colors[num]);
            }else{

                $(".box"+i).removeClass(cName).addClass(colors[num]);
                nowColors.push(colors[num]);
            }

            console.log("box"+i+"变成了:"+colors[num]);
        }

        if(nowColors.length == 9){
            nowColors = [];
        }
    }
    setInterval(change,1000);

});
