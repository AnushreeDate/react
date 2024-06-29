import React, { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


// importing components
import Header from './components/include/header.jsx'
import Footer from './components/include/footer.jsx'

import EmojiGrid from './components/sections/EmojiGrid.jsx'

import AddEmoji from './components/sections/AddEmoji.jsx'
const App = () => {

    let [emojies, setEmojies] = useState([
        {
            id: 1,
            icon: "🔥",
            name: "Fire Emoji",
            discription: " something is cool, awesome, exciting, or more colloquially, “on fire.”"
        },
        {
            id: 2,
            icon: "👌",
            name: "Best",
            discription: "simple agreement, understanding, or satisfaction !"
        },
        {
            id: 3,
            icon: "👋",
            name: "Hii",
            discription: "the 👋 emoji mimics the gesture of a hand waving hello."
        },
        {
            id: 4,
            icon: "✌️",
            name: "Victory",
            discription: "peace sign or victory hand gesture."
        },
        {
            id: 5,
            icon: "🔥",
            name: "Fire Emoji",
            discription: " something is cool, awesome, exciting, or more colloquially, “on fire.”"
        },
        {
            id: 6,
            icon: "👌",
            name: "Best",
            discription: "simple agreement, understanding, or satisfaction !"
        },
        {
            id:7, 
            icon: "👋",
            name: "Hii",
            discription: "the 👋 emoji mimics the gesture of a hand waving hello."
        },
        {
            id:8,
            icon: "🔥",
            name: "Fire Emoji",
            discription: " something is cool, awesome, exciting, or more colloquially, “on fire.”"
        },
        {
            id: 9,
            icon: "👌",
            name: "Best",
            discription: "simple agreement, understanding, or satisfaction !"
        }
    ])


    let callFromAdd = (emoji) => {
        // alert("called from Add Emojies")
        console.log("this is app.jsx and emoji is : ")

        emoji.id = emojies[emojies.length - 1].id + 1

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