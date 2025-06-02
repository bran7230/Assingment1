document.addEventListener("DOMContentLoaded", function () {
    //Word lists for the game
    let word1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];

    let word2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];

    let word3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];

    let word4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];

    let word5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

    //Elements in the HTML, where the words will be displayed and buttons to trigger updates
    let output = document.querySelector("#out1");

    let button1 = document.querySelector("#button1");

    let button2 = document.querySelector("#button2");

    let button3 = document.querySelector("#button3");

    let button4 = document.querySelector("#button4");

    let button5 = document.querySelector("#button5");

    //Function to generate a random number between 1 and x (inclusive)
    function random(x) {
        return Math.floor(Math.random() * x.length);
    }
    //Functions to update the output with a random word from each list
    //Each function corresponds to a button and appends a random word from the respective list to the output
    function updateWord1() {
        let rand = random(word1);
        output.textContent += word1[rand] + " ";
    }

    function updateWord2() {
        let rand = random(word2);
        output.textContent += word2[rand] + " ";
    }

    function updateWord3() {
        let rand = random(word3);
        output.textContent += word3[rand] + " ";
    }

    function updateWord4() {
        let rand = random(word4);
        output.textContent += word4[rand] + " ";
    }

    function updateWord5() {
        let rand = random(word5);
        output.textContent += word5[rand] + " ";
    }


    //Adding event listeners to the buttons to call the respective update functions when clicked
    button1.addEventListener("click", updateWord1);
    button2.addEventListener("click", updateWord2);
    button3.addEventListener("click", updateWord3);
    button4.addEventListener("click", updateWord4);
    button5.addEventListener("click", updateWord5);

});

