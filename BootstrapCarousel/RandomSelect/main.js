/*
var pic = [
    "01.jpg",
    "02.jpg",
    "03.jpg"
]
*/
/*
var pic = [
    "https://travelimg.yam.com/DATA/ARTICLE/20180904164952285.jpg",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/veiv89vlrhd3xcaatubu/%E7%8F%8D%E5%A7%9A%E5%95%86%E8%99%9F%E6%BB%B7%E8%82%89%E9%A3%AF-%E6%8D%B7%E9%81%8B%E4%B8%AD%E6%AD%A3%E7%B4%80%E5%BF%B5%E5%A0%82%E7%AB%99.jpg",
    "https://tshop.r10s.com/ff1/509/d51e/03a9/70e2/a6f3/687b/11a8e682fd2c600ce3781e.jpg"
]
*/
var pic = [
    "https://ewedit.files.wordpress.com/2019/04/godzilla.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_.jpg"
]
var lastNum = -1;
$(document).ready(function() {
    $("input").click(function()
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == lastNum)
        {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        lastNum = randomChildNumber;
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 250);
        /*
        if(randomChildNumber == 0)
        {
            $("img").attr("width", 600);
        }
        else
        {
            $("img").attr("width", 691);
        }
        */
    });
});