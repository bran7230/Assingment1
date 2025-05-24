document.addEventListener("DOMContentLoaded", function () {
    let word1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
    let word2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
    let word3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
    let word4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
    let word5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

    let output = document.querySelector("#out1");
    let button1 = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let button4 = document.querySelector("#button4");
    let button5 = document.querySelector("#button5");


    function random() {
        return Math.floor(Math.random() * (5 - 1 + 1) + 1);
    }

    function updateWord1() {
        let rand = random();
        output.textContent = word1[rand]
    }

    function updateWord2() {
        let rand = random();
        output.textContent = word2[rand];
    }

    function updateWord3() {
        let rand = random();
        output.textContent = word3[rand];
    }

    function updateWord4() {
        let rand = random();
        output.textContent = word4[rand];
    }

    function updateWord5() {
        let rand = random();
        output.textContent = word5[rand];
    }



    button1.addEventListener("click", updateWord1);
    button2.addEventListener("click", updateWord2);
    button3.addEventListener("click", updateWord3);
    button4.addEventListener("click", updateWord4);
    button5.addEventListener("click", updateWord5);

});

