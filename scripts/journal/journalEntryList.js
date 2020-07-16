import { useJournalEntries } from "./journalDataProvider.js"
import { journalAsHTML } from "./journalEntry.js"

export const journalList = () => {
  const contentElement = document.querySelector(".automated")
  const journals = useJournalEntries()

  let journalHTMLrepresentation = ""
  for(const journalObj of journals){
      journalHTMLrepresentation += journalAsHTML(journalObj)
  }

  contentElement.innerHTML += `
      <article class="journalEntriesList">
          ${journalHTMLrepresentation}
      </article>
  `
}