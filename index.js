const twitterLink = 'https://twitter.com/intent/tweet?text=%22'

const quotes = [
  {
    quote: "I cannot teach anybody anything; I can only make them think.",
    author: 'Socrates'
  },
  {
    quote: "Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
    author: 'Anthony Bourdain'
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: 'Malcolm X'
  },
  {
    quote: "We don't make mistakes, just happy little accidents.",
    author: 'Bob Ross'
  }
]

document.addEventListener('DOMContentLoaded', (event) => {
  generateQuote(quotes);
});

function getRandomIndex(arr) {
  const optionsLength = arr.length
  const randomIndex = Math.floor(Math.random() * optionsLength)
  return randomIndex
}

function generateQuote(arr) {
  console.log('new quote')
  const randomIndex = getRandomIndex(arr)
  const quote = document.getElementById('text').innerText = arr[randomIndex].quote
  const author = document.getElementById('author').innerText = arr[randomIndex].author
  const quoteInApiFormat = quote.replaceAll(' ', '%20')
  const authorInApiFormat = "-" + author.replaceAll(' ', '%20')
  document.getElementById('tweet-quote').href = `${twitterLink}${quoteInApiFormat}%22%20%20${authorInApiFormat}`
}
