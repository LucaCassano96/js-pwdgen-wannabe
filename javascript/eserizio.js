
/* Chiedi all’utente il suo nome  */

let userName, userSurname, userColor, messaggioName, messaggioSurname, messaggioColor, password;

userName = prompt ("inserisci il tuo nome");
console.log(userName);



/* poi chiedi il suo cognome */

userSurname = prompt ("inserisci il tuo cognome");
console.log(userSurname);




/* poi chiedi il suo colore preferito */

userColor = prompt ("inserisci il tuo colore preferito");
console.log(userColor);


/* messaggio all'utente */

messaggioName =`Ti chiami: ${userName}`;
messaggioSurname= `Il tuo cognome è: ${userSurname}`;
messaggioColor= `Il tuo colore preferito è il: ${userColor}`

console.log(messaggioName);
console.log(messaggioSurname);
console.log(messaggioColor);

document.getElementById("prova-1").innerHTML = messaggioName;
document.getElementById("prova-2").innerHTML = messaggioSurname;
document.getElementById("prova-3").innerHTML = messaggioColor;

/* password */

password = `la tua password è: ${userName + userSurname + userColor + 21}`;
console.log(password);
document.getElementById("prova-4").innerHTML = password;

