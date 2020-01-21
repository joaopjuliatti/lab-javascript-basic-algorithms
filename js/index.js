// Iteration 1: Names and Input
const hacker1  = 'Cynthia'
console.log(`The driver's name is ${hacker1}`);

const hacker2  = 'Joao'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let result1 ='';
for(let i=0;i<=hacker1.length-1;i++){
    result1 += hacker1[i].toUpperCase();
    if(i!== hacker1.length-1){
        result1+= ' ';
    }
}
console.log(result1)


let result2 ='';
for(let i=hacker2.length-1;i>=0;i--){
    result2 += hacker2[i];
}
console.log(result2)

let i = 0
if(hacker1===hacker2){
    console.log("What?! You both have the same name?");
}
else{
    while(i<=hacker1.length || i<=hacker2.length){
        if(hacker1[i]<hacker2[i]||hacker1[i]===undefined){
            console.log("The driver's name goes first.");
            break;
        }
        else if(hacker1[i]>hacker2[i]||hacker2[i]===undefined){
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
        i++;
    }
}

// Iteration 3: Loops
paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat vehicula massa, vitae consectetur urna ultrices sit amet. Nunc massa sem, fermentum in ullamcorper ut, imperdiet sit amet lorem. Nam lacus orci, interdum at malesuada non, pulvinar non diam. Suspendisse magna ante, feugiat in risus eget, pulvinar feugiat lectus. Sed eget justo leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris et eros facilisis, scelerisque massa eget, imperdiet dolor. Nunc dolor massa, ullamcorper quis felis vel, sollicitudin hendrerit dolor. Proin interdum purus sit amet sapien elementum scelerisque. Aenean faucibus nibh ligula, a scelerisque metus tempus vitae.

Donec eget tellus nec justo bibendum luctus quis sit amet turpis. Vivamus lacinia, arcu sit amet convallis vehicula, mauris neque placerat diam, ut elementum quam purus id mauris. Duis quis bibendum lacus, ut placerat leo. Nunc imperdiet lacus in diam pulvinar accumsan. Vestibulum faucibus efficitur tempus. Pellentesque ut sem purus. Donec vestibulum malesuada semper. Curabitur venenatis ut sapien nec consequat. Nulla facilisi. Vestibulum consequat purus sapien, vel facilisis dolor varius eu. Nullam lorem sapien, gravida vel mi ut, vestibulum placerat tortor. Sed lacinia et ipsum eu fringilla.

Aenean dictum quis quam id elementum. Pellentesque pretium est sapien, a ultricies diam ornare vitae. In et metus viverra lorem convallis mollis non et elit. Nam varius laoreet purus, sit amet malesuada tortor ullamcorper finibus. Etiam imperdiet augue at fermentum bibendum. Cras id tristique felis. Nullam eu rhoncus augue. Maecenas metus nibh, tincidunt nec lacinia et, lacinia vel libero. Nunc vel magna in tellus rhoncus varius. Phasellus feugiat suscipit massa in tempor. Phasellus posuere egestas massa a auctor. Praesent rutrum pharetra dolor vitae ornare. Vestibulum sed mauris nunc. `

let count = 0;
for(let i=0;i<=paragraph.length-1;i++){
    if(paragraph[i]===' '){
        count +=1;
    }
    else if(paragraph[i]==='\n'){
        count +=0.5;
    }
}


//Bonus 2
const phraseToCheck =`A man, a plan, a canal, Panam!`;

let normalPhrase = '';
for(let i=0;i<=phraseToCheck.length-1;i++){
    if(phraseToCheck[i].toUpperCase().charCodeAt(0)>=65 && phraseToCheck[i].toUpperCase().charCodeAt(0)<=90){
        normalPhrase +=phraseToCheck[i].toUpperCase();
    }
}

let inversePhrase = '';
for(let i=phraseToCheck.length-1;i>=0;i--){
    if(phraseToCheck[i].toUpperCase().charCodeAt(0)>=65 && phraseToCheck[i].toUpperCase().charCodeAt(0)<=90){
        inversePhrase +=phraseToCheck[i].toUpperCase();
    }
}

if(normalPhrase===inversePhrase){
    console.log('The phrase is a palindrome')
}
else{
    console.log('The phrase is not a palindrome')
}



