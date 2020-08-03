import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { journalAsHTML } from "./journalEntry.js"

const contentElement = document.querySelector(".automated")



 const render = (entryCollection) => {
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