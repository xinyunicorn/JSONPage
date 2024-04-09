let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase  = [
  {
    "song" : "You Belong With Me",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png",
    "b_color" : "#c9c9ab",
    "t_color" : "#727355",
    "bridge" : "Oh, I remember you driving to my house / In the middle of the night / I'm the one who makes you laugh / When you know you're 'bout to cry / And I know your favorite songs / And you tell me 'bout your dreams / Think I know where you belong / Think I know it's with me"
  },
  {
    "song" : "Enchanted",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png/220px-Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png",
    "b_color" : "#905da1",
    "t_color" : "#350c5e",
    "bridge" : "This is me praying that / This was the very first page / Not where the storyline ends / My thoughts will echo your name / Until I see you again / These are the words I held back / As I was leaving too soon / I was enchanted to meet you"
  },
  {
    "song" : "All Too Well",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png",
    "b_color" : "#c4848e",
    "t_color" : "#6b0c07",
    "bridge" : "Well, maybe we got lost in translation, maybe I asked for too much / But maybe this thing was a masterpiece 'til you tore it all up / Runnin' scared, I was there / I remember it all too well / And you call me up again just to break me like a promise / So casually cruel in the name of bein' honest / I'm a crumpled-up piece of paper lyin' here / 'Cause I remember it all, all, all"
  },
  {
    "song" : "Out Of The Woods",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png",
    "b_color" : "#a6daed",
    "t_color" : "#316191",
    "bridge" : "Remember when you hit the brakes too soon? / Twenty stitches in the hospital room / When you started crying, baby, I did too / But when the sun came up, I was looking at you / Remember when we couldn't take the heat? / I walked out, I said, 'I'm setting you free' / But the monsters turned out to be just trees / When the sun came up, you were looking at me"
  },
  {
    "song" : "Getaway Car",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png",
    "b_color" : "#a2a7a8",
    "t_color" : "#474747",
    "bridge" : "We were jet-set, Bonnie and Clyde (Oh-oh) / Until I switched to the other side, to the other side / It's no surprise I turned you in (Oh-oh) / 'Cause us traitors never win"
  },
  {
    "song" : "Daylight",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
    "b_color" : "#f7b0f5",
    "t_color" : "#d138c2",
    "bridge" : "And I can still see it all (In my mind) / All of you, all of me (Intertwined) / I once believed love would be (Black and white) / But it's golden (Golden)"
  },
  {
    "song" : "my tears ricochet",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png",
    "b_color" : "#d6d6d6",
    "t_color" : "#7d7d7d",
    "bridge" : "And I can go anywhere I want / Anywhere I want, just not home / And you can aim for my heart, go for blood / But you would still miss me in your bones"
  },
  {
    "song" : "right where you left me",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png",
    "b_color" : "#9c6322",
    "t_color" : "#402306",
    "bridge" : "Did you ever hear about the girl who got frozen? / Time went on for everybody else, she won't know it / She's still twenty-three inside her fantasy / How it was supposed to be"
  },
  {
    "song" : "You're On Your Own Kid",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
    "b_color" : "#8698bf",
    "t_color" : "#242e45",
    "bridge" : "From sprinkler splashes to fireplace ashes / I gave my blood, sweat, and tears for this / I hosted parties and starved my body / Like I'd be saved by a perfect kiss / The jokes weren't funny, I took the money / My friends from home don't know what to say / I looked around in a blood-soaked gown / And I saw something they can't take away / 'Cause there were pages turned with the bridges burned / Everything you lose is a step you take / So, make the friendship bracelets, take the moment and taste it / You've got no reason to be afraid"
  }
];

for (let i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['b_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['song'];
  newContentHeading.style.color = incomingJSON['t_color'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = incomingJSON['bridge'];
  newContentSubhead.style.color = incomingJSON['t_color'];
  newContentElement.appendChild(newContentSubhead);

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}