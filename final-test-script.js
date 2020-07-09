// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

// 2. να ορίσετε τους σχετικούς χειριστές συμβάντων //DONE
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("new-guess").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            checkKey(e);
        }
    });

    document.getElementById("check").addEventListener("click",function(){
        checkGuess();
    });

    document.getElementById("restart").addEventListener("click",function(){
        restart();
    });

    document.getElementById("new-guess").focus;
  });


let previousGuesses = [];
let theGuess;
window.onload = newRandom();
// newGuess.focus();

function newRandom(){
/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100
 και τον εκχωρεί στη μεταβλητή theGuess */ //DONE
 theGuess = Math.floor(Math.random() * 101); 
 console.log("Number guessed is:", theGuess);
}

function checkKey(e){
    let newValue = document.getElementById("new-guess").value;
    processGuess(newValue);
/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>>
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού.
 */
}

function checkGuess(){
    let newValue = document.getElementById("new-guess").value;
    processGuess(newValue);

/* 5. Να ορίσετε συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει
τις κατάλληλες ενέργειες για να μην μπορεί να εισάγει ο χρήστης νέο αριθμό ή να ανασταλεί η
λειτουργία του <<enter>>, εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */
}

function processGuess(newValue){
    console.log("You entered: ", newValue);
    if(!isNaN(newValue)){
        if(newValue == theGuess){ //you won.
            document.getElementById("message").innerHTML = "Μπράβο. Το βρήκες. 🥳";
            document.getElementById("message").setAttribute("id", "won");;
            return "win";
        }
        else{ // wrong try.
            previousGuesses.push(newValue);
            if(previousGuesses.length > 10){ // you lost.
                document.getElementById("message").innerHTML = "Δυστυχώς έχασες. Δοκίμασε ξανα. 👻";
                document.getElementById("message").classList.add("lost");
                return "lost";
            }
            else if(newValue>theGuess) {//ελέγχω αν ο αριθμός που έβαλε ο χρήστης είναι πιο ψηλά από τον theGuess
                document.getElementById("message").innerHTML = "Λάθος,το ξεπέρασες";
                document.getElementById("low-high").innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
                document.getElementById("message").classList.add("again");
                return "again";

            }
            else if(newValue<theGuess) {//ελέγχω αν ο αριθμός που έβαλε ο χρήστης είναι πιο χαμηλά από τον theGuess
                document.getElementById("message").innerHTML = "Λάθος,είσαι πιο χαμηλά";
                document.getElementById("low-high").innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
                document.getElementById("message").classList.add("again");
                return "again";

            }
            else{
                document.getElementById("message").innerHTML = "";
                document.getElementById("message").classList.remove("warning");
                document.getElementById("low-high").innerHTML = previousGuesses;
            }
        }
    }else{
        document.getElementById("message").innerHTML = "Δωσε αριθμό... 😠";
        document.getElementById("message").classList.add("warning");
    }
 
    /* 6.  Να ορίσετε συνάρτηση processGuess(newValue) η οποία καλείται από τη συνάρτηση checkGuess,
 περιέχει τη λογική του παιχνιδιού, ελέγχει αν η τιμή του χρήστη είναι σωστή, ή αν το παιχνίδι έχει
 τελειώσει χωρίς ο χρήστης να έχει βρει τον αριθμό, και επιστρέφει αντίστοιχα την τιμή "win", ή "lost",
 δημιουργεί και εμφανίζει τα κατάλληλα μηνύματα, αλλάζοντας το χρώμα του στοιχείου μηνυμάτων.
 Όλα τα μηνύματα του προγράμματος εμανίζονται από την processGuess().
 Σε περίπτωση που το παιχνίδι δεν έχει ακόμα τελειώσει, η συνάρτηση μπορεί είτε να μην επιστρέφει
 κάποια ιδιαίτερη τιμή,
 είτε να επιστρέφει κάποια τιμή της επιλογής σας */
}
function restart(){
/* 7. Να ορίσετε συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο
'restart' και επανεκινεί τη διαδικασία */
    alert("Πάτησες 'Παιξε ξανά'");
    document.getElementById("message").classList.remove("warning");
    document.getElementById("message").classList.remove("lost");
    document.getElementById("message").classList.remove("won");
    document.getElementById("message").innerHTML = "";
    document.getElementById("low-high").innerHTML = "";
    previousGuesses = [];
    newRandom();
}
