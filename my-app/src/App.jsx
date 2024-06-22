import React ,{useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


import Header from '../src/components/include/header.jsx'
import Footer from '../src/components/include/footer.jsx'

import AddEmoji from '../src/components/sections/AddEmoji.jsx'
import EmojiGrid from '../src/components/sections/EmojiGrid.jsx'


const App = () => {

  let [emojies, setEmojies] = useState([
      {
          id: 1,
          icon: "🔥",
          name: "Fire Emoji",
          discription: "some discription data !"
      },
      {
          id: 2,
          icon: "👌",
          name: "Best",
          discription: "some discription data best !"
      },
      {
          id: 3,
          icon: "👋",
          name: "Hii",
          discription: "some discription data hii !"
      },
      {
          id: 4,
          icon: "✌️",
          name: "Victory",
          discription: "some discription data Victory !"
      }
  ])


  let callFromAdd = (emoji) => {
      // alert("called from Add Emojies")
      console.log("this is app.jsx and emoji is : ")

      console.log(emoji)

      setEmojies((prev) => {
          return (
              [...prev, emoji]
          )
      })
  }

  return (
      <>
          <Header />

          <AddEmoji call={callFromAdd} />

          {/* display all emojies */}

          <EmojiGrid data={emojies} />

          <Footer />
      </>
  )
}

export default App
