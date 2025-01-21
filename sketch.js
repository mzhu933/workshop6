let inputBox, addButton; 
let userPoem = []; 
let posTags = []; 

function setup() {
  createCanvas(500, 500);
  background(180, 210, 250); 

  inputBox = createInput("");
  inputBox.position(10, 10);
  inputBox.style("font-family", "Serif");

  addButton = createButton("Add to Poem");
  addButton.position(10, 40);
  addButton.mousePressed(newLine);
}

function newLine() {
  let userLine = inputBox.value(); 
  inputBox.value(""); // Clear input box

  if (userLine.trim() === "") return; // Ignore empty input

  let words = RiTa.tokenize(userLine); 
  let r = floor(random(0, words.length)); 
  let rhymes = RiTa.rhymesSync(words[r]); 

  if (rhymes.length === 0) {
    // If no rhymes found, keep the original line
    userPoem.push(userLine);
  } else {
    // Replace the random word with a rhyming word
    let changedWord = random(rhymes);
    words[r] = changedWord;
    userLine = RiTa.untokenize(words);
    userPoem.push(userLine);
  }

  // Generate POS tags for the current line
  let posLine = RiTa.pos(userLine).join(" "); 
  posTags.push("000 " + posLine); 

  
  redraw();
}

function draw() {
  background(180, 210, 250);

  fill(0);
  textSize(16);
  textFont("Serif");

  
  let y = 80;
  for (let line of userPoem) {
    text(line, 10, y, width - 20);
    y += 24; // Move to the next line
  }

  
  y += 24; 
  for (let posLine of posTags) {
    text(posLine, 10, y, width - 20);
    y += 24; 
  }
}












// let inputBox, addButton; 
// let userPoem = []; 
// function setup() {
//   createCanvas(500, 500);
//   background(180, 210, 250); 

//   // Create input box
//   inputBox = createInput("");
//   inputBox.position(10, 10);
//   inputBox.style("font-family", "Serif");

//   // Create button
//   addButton = createButton("Add to Poem");
//   addButton.position(10, 40);
//   addButton.mousePressed(newLine);
// }

// function newLine() {
//   let userLine = inputBox.value(); 
//   inputBox.value(""); 

//   if (userLine.trim() === "") return; 

//   let words = RiTa.tokenize(userLine); 
//   let r = floor(random(0, words.length)); 
//   let rhymes = RiTa.rhymesSync(words[r]); 

//   if (rhymes.length === 0) {
//     
//     userPoem.push(userLine);
//   } else {
//     
//     let changedWord = random(rhymes);
//     words[r] = changedWord;
//     userLine = RiTa.untokenize(words);
//     userPoem.push(userLine);
//   }

//   
//   redraw();
// }

// function draw() {
//   background(180, 210, 250);

//   fill(0);
//   textSize(16);
//   textFont("Serif");

//   let y = 80;
//   for (let line of userPoem) {
//     text(line, 10, y, width - 20);
//     y += 24; // Move to the next line
//   }
// }










