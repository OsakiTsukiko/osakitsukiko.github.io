const emoji_list = [
    "🫀", "🧞‍♂️", "🧌", "🧙‍♂️", "🧝‍♀️",
    "🦐", "🐏", "🐙", "🍟", "🎀",
]

window.onload = () => {
    let em_e = document.getElementsByClassName("rnd-emoji");
    console.log(em_e);
    for (let e of em_e) {
        e.textContent = emoji_list[
            Math.floor(Math.random() * emoji_list.length)
        ]
    }
}