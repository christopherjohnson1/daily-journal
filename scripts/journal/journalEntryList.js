import { useJournalEntries } from "./journalDataProvider.js"
import { journalAsHTML } from "./journalEntry.js"

export const journalList = () => {
  const contentElement = document.querySelector(".automated")
  const journals = useJournalEntries()

  contentElement.innerHTML += `
      <article class="journalEntriesList">
          ${journals.map(journalObj => journalAsHTML(journalObj)).join('')}
      </article>
  `
}