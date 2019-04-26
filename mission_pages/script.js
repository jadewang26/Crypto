function typeWriter(){
  
var message = document.getElementById('message');

  
var typewriter = new Typewriter(message, {
    loop: false,
    cursor: '_',
    delay: 50,
});

typewriter.typeString('<strong>John Tiltman</strong>:<br>')
    .typeString('The Soviet Union seems to be planning an invasion on a country in Eastern Europe. They have been communicating with Germany for a week and their messages have been getting more frequent by the day. Whatever the Axis Powers are planning, they will execute soon. Your job is to decrypt the <strong id="code">monoalphabetic cipher</strong>messages the Soviet Union have been receiving. That is, unless it proves to be too difficult for a woman like you.')
    .start();
    
}

    
