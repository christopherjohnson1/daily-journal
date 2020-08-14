export const journalAsHTML = (journal) => {
  return `
  <section class="entry-list">
  <div>Entry Number ${journal.id}</div>
  <div>Date: ${journal.date}</div>
  <div>Concept(s): ${journal.concept}</div>
  <div class="journal-entry">"${journal.entry}"</div>
  <div>Mood: ${journal.mood.label}</div>
  <button class="delete">Delete Entry</button>
  <button class="edit">Edit Entry</button>
</section>
  `
}