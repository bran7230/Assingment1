document.addEventListener("DOMContentLoaded", function () {
    //Word lists for the game
    let word1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];

    let word2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];

    let word3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];

    let word4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];

    let word5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

    //Elements in the HTML, where the words will be displayed and buttons to trigger updates
    let output = document.querySelector("#out1");

    let start = document.querySelector("#start");

    let button1 = document.querySelector("#button1");

    let button2 = document.querySelector("#button2");

    let button3 = document.querySelector("#button3");

    let button4 = document.querySelector("#button4");

    let button5 = document.querySelector("#button5");

    let suprise = document.querySelector("#suprise");

    let reset = document.querySelector("#reset");

    let playbackButton = document.querySelector("#playback");


    let word1Count = 0; //Counter for word1 to ensure it cycles through the list
    let word2Count = 0; //Counter for word2
    let word3Count = 0; //Counter for word3
    let word4Count = 0; //Counter for word4
    let word5Count = 0; //Counter for word5
    //Function to reset the output text

    // Get all verb lists
    const verbLists = document.querySelectorAll('.verb-list');

    // Function to highlight the selected word in the verb list
    function highlightWord(listIndex, wordIndex) {
        const list = verbLists[listIndex];
        const items = list.querySelectorAll('.verb');
        items.forEach((li, idx) => {
            if (idx === wordIndex) {
                li.classList.add('selected');
            } else {
                li.classList.remove('selected');
            }
        });
    }

    function resetOutput() {
        output.textContent = "";
        //Remove the 'selected' class from all verbs in all lists
        verbLists.forEach(list => {
            list.querySelectorAll('.verb').forEach(li => li.classList.remove('selected'));
        });
    }

    //Functions to update the output with the next word in each list
    //These functions also highlight the selected word in the verb list
    function updateWord1() {
        word1Count = (word1Count + 1) % word1.length;
        highlightWord(0, word1Count);
    }
    function updateWord2() {
        word2Count = (word2Count + 1) % word2.length;
        highlightWord(1, word2Count);
    }
    function updateWord3() {
        word3Count = (word3Count + 1) % word3.length;
        highlightWord(2, word3Count);
    }
    function updateWord4() {
        word4Count = (word4Count + 1) % word4.length;
        highlightWord(3, word4Count);
    }
    function updateWord5() {
        word5Count = (word5Count + 1) % word5.length;
        highlightWord(4, word5Count);
    }

    function supriseMe() {
        //This function generates a random sentence by calling all update functions
        output.textContent = ""; //Clear previous output
        //Generate a random index for each word list
        let randomIndex1 = Math.floor(Math.random() * word1.length);
        let randomIndex2 = Math.floor(Math.random() * word2.length);
        let randomIndex3 = Math.floor(Math.random() * word3.length);
        let randomIndex4 = Math.floor(Math.random() * word4.length);
        let randomIndex5 = Math.floor(Math.random() * word5.length);
        //Construct the sentence using the random words
        output.textContent = `${word1[randomIndex1]} ${word2[randomIndex2]} ${word3[randomIndex3]} ${word4[randomIndex4]} ${word5[randomIndex5]}.`;
        //Reset the counters to allow for new random selections
        word1Count = 0;
        word2Count = 0;
        word3Count = 0;
        word4Count = 0;
        word5Count = 0;

        //Remove the 'selected' class from all verbs in all lists
          verbLists.forEach(list => {
            list.querySelectorAll('.verb').forEach(li => li.classList.remove('selected'));
        });
    }

    function playback() {
        output.textContent = ""; //Clear previous output
        //Construct the sentence using the current counts of each word list
        //This will ensure that the words are selected based on the current count, cycling through the lists
        output.textContent = `${word1[word1Count % word1.length]} ${word2[word2Count % word2.length]} ${word3[word3Count % word3.length]} ${word4[word4Count % word4.length]} ${word5[word5Count % word5.length]}.`;
        //remove the higlights from the words in each verb list
          verbLists.forEach(list => {
            list.querySelectorAll('.verb').forEach(li => li.classList.remove('selected'));
        });
    }

    //Adding event listeners to the buttons to call the respective update functions when clicked
    button1.addEventListener("click", updateWord1);
    button2.addEventListener("click", updateWord2);
    button3.addEventListener("click", updateWord3);
    button4.addEventListener("click", updateWord4);
    button5.addEventListener("click", updateWord5);
    suprise.addEventListener("click", supriseMe);
    reset.addEventListener("click", resetOutput);
    playbackButton.addEventListener("click", playback);
    //Initial output
    start.textContent = "Click a button to start the game!";
});

