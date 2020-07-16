/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "indifferent"
  },
  {
      id: 2,
      date: "07/29/2025",
      concept: "javascript",
      entry: "Today we talked about how to link our main.js file to our project.",
      mood: "happy"
  },
  {
      id: 3,
      date: "08/08/2025",
      concept: "javascript modules",
      entry: "Today we talked about how to setup javascript modules to compartmentalize our project.",
      mood: "happy"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}