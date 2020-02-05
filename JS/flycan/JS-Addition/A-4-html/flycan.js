let nameArray = ["one","two","three","four"] 

let idBox_msg = $("#box-msg");

let start = 0;

let catchWord = idBox_msg.html();



$(".box").hover(function () {
    // over
    let touch = $(this).index();
    idBox_msg.html(nameArray[touch]);
}, function () {
    // out
        idBox_msg.html(catchWord)
}
);
