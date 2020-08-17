let moods = []

export const useMoods = () => {
    return moods.slice()
}
export const getmoods = () => {
    return fetch("http://localhost:3000/moods")
    .then(response => response.json())
    .then(moodArr => {
        moods = moodArr
    })
}