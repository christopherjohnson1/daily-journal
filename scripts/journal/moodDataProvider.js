let moods = []

export const useMoods = () => {
    return moods.slice()
}
export const getmoods = () => {
    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then(moodArr => {
        moods = moodArr
    })
}