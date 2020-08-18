let journal = []

const eventHub = document.querySelector(".eventHub")

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

export const getEntries = () => {
  return fetch("http://localhost:3000/entries?_expand=mood")
      .then(response => response.json())
      .then(entryArray => {
        journal = entryArray
      })
}

export const saveJournalEntry = (journalEntryObj) => {
  fetch("http://localhost:3000/entries?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(journalEntryObj)
  })
  .then(getEntries)
  .then(dispatchStateChangeEvent)
}