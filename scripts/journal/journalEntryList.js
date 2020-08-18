import { useJournalEntries, getEntries, deleteJournalEntry } from "./journalDataProvider.js"
import { journalAsHTML } from "./journalEntry.js"

const contentElement = document.querySelector(".automated")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteJournalEntry(id).then(
            () => {
                const updatedEntries = useJournalEntries()
                render(updatedEntries)
            }
        )
    }
})

 const render = () => {
  const journals = useJournalEntries()

  contentElement.innerHTML += `
      <article class="journalEntriesList">
          ${journals.map(journalObj => journalAsHTML(journalObj)).join('')}
      </article>
  `
}

export const journalEntryList = () => {
    getEntries().then(() => {
      const entries = useJournalEntries()

      render(entries)
    })
}