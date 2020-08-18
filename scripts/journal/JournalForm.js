import { saveJournalEntry } from "./journalDataProvider.js"
import { useMoods, getmoods } from "./moodDataProvider.js"

const contentTarget = document.querySelector(".journal-entry-form")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "form-submit") {

        const journalDate = document.querySelector("#journalDate")
        const journalConcepts = document.querySelector("#conceptsCovered")
        const journalEntry = document.querySelector("#journalEntry")
        const journalMood = document.querySelector("#daily-mood")

        const newEntry = {
            date: journalDate.value,
            concept: journalConcepts.value,
            entry: journalEntry.value,
            moodId: parseInt(journalMood.value)
        }
        saveJournalEntry(newEntry)
    }
})


export const RenderJournalEntryForm = () => {
    getmoods()
    .then(() => {
        const moods = useMoods()
        contentTarget.innerHTML = `
        <form>
        <h2>Save New Journal Entry</h2>
        
        <fieldset>
        <label for="journalDate">Select Entry Date</label>
        <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="concepts">
        <label for="journalConcepts">Concepts covered</label>
        <textarea class="concepts-covered" id ="conceptsCovered" placeholder="Today we learned about..."></textarea>
        </fieldset> 
        <fieldset class="entry">
        <label for="journalEntry">Journal Entry</label>
        <textarea class="journal-entry" id="journalEntry" placeholder="Go into more detail here..."></textarea>
        </fieldset> 
        <fieldset>
        <label for="journalFeelins">Mood for the day</label>
        <select class="feelings" id="daily-mood">
        ${
            moods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
                ).join("")
            }
            
            </select>
            </fieldset>
            <button class="submit-button" id="form-submit">Submit</button>
            </form>
            `
        })
}