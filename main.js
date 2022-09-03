(function () {
  const quotes = [
    {
      quote: 
      'It is difficult to make a man feel miserable while he feels worthy of himself.',
      author: 
      "Abraham Lincoln"
    },
    {
      quote: 
      'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.',
      author: 
      "Booker T. Washington"
    },
    {
      quote: 
      'Collaboration, creativity, and respect build life long connections that matter and make a difference, propelling us to work together across all boundaries.',
      author: 
      "Diane Luna"
    }, 
    {
      quote: 
     'If life were predictable it would cease to be life, and be without flavor.',
     author: 
      "Eleanor Roosevelt" 
    },
    {
      quote: 
     'You have to go the way your blood beats.If you do not live the only life you have, you will not live some other life, you will not live any life at all.',
     author: 
      "James Baldwin" 
    },
  {
    quote: 
    'You have gotta dance like there is nobody watching, Love like you will never be hurt, Sing like there is nobody listening, And live like it is heaven on earth.',
    author: 
    "William W. Purkey"
  }
  ];
  
  const quote = document.querySelector('#quote')
  const author = document.querySelector('.author')
  const button = document.querySelector(".btn")
  
  button.addEventListener("click", function(){
    let index = parseInt(Math.random() * quotes.length)
    quote.textContent = `\"${quotes[index].quote}\"`
    author.textContent = quotes[index].author
  })
})()
