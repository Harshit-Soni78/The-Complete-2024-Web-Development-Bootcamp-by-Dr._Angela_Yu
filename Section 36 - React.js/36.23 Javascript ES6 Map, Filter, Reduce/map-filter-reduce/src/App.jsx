import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// const meaningsArray = emojipedia.map(function(emojientry){
//   emojientry.meaning.substring(0,101)
// })

const meaningsArray = emojipedia.map((emojientry)=>{
  emojientry.meaning.substring(0,101)
})

console.log(meaningsArray)

function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
