// // This is number

// var a = 20;
// var b = 25;
// var results = (a + b);
// console.log(results);

// // This is string

// var arry = "rajesh";
// var arr = "sonu";
// var results1 = (arry + arr);
// console.log(results1);

// // This is arry

// var animales = ["dog", "cat", "rat"];
// console.log(animales[1]);

// // This is objection

// var section = {
//     name: "rajesh",
//     contant: "658836",
//     email: "rajesh@gmail.com",
//     place: "mpl"
// }
// console.log(section.name);

// // This is function

// function demo() {
//     var names = "rajesh";
//     console.log(names);
// }
// demo();

// $("but").click(function {
//     $("add-class h1").addClass("add")
// })

// $(document).ready(function() {
//     $("#but").click(function() {
//         $(".add-class h1").addClass("add")
//     });
//     $("#btm").click(function() {
//         $(".remove-class,h2").removeClass("remove")
//     });
// });

$(document).ready(function() {
    $("#btm-level2").click(function() {
        $(".traversing-leval2").parentsUntil().css("border", "1px solid red")
    });
});