# Known Limitations & Future Considerations

## 1. Known Architectural Limitations
1. **Frontend-Only Scope:**
   - In adherence to strict project constraints (Section 2.1), the application does not have a persistent cloud backend (no Node.js/Express server, no SQL/NoSQL database).
   - Data is stored in browser `localStorage`. If the user clears browser cookies/storage or switches devices/browsers, stored progress (test history and bookmarks) will not automatically transfer.
2. **Fixed Client Storage Quotas:**
   - Modern browsers allocate between 5MB and 10MB of `localStorage` per origin. The current schema (`recallify_*_v1`) uses less than 150KB for dozens of test logs and bookmarks. However, storing hundreds of archived tests with full detailed question snapshots could approach quota limits over extended multi-year periods.
3. **Read-Only Question Banks:**
   - Question banks are bundled directly with the frontend build. Users cannot create custom decks or edit questions in this release.
4. **Offline Accessibility:**
   - The application relies on Google Fonts CDN for the Inter font and remote profile image placeholders. While functional offline if cached, full offline PWA service worker caching is a recommended future enhancement.

## 2. Potential Future Roadmap Enhancements
- **Multi-Device Cloud Synchronization:** Optional Supabase / Firebase authentication to sync progress across phones and laptops.
- **Custom Deck Creator & CSV/DOCX Importer:** Enable students to upload additional exam documents directly from the browser using web-based DOCX parsers.
- **Leitner Spaced Repetition Box Scheduling:** Add spaced calendar scheduling (Box 1: every 1 day, Box 2: every 3 days, Box 3: every 7 days) to complement round-based repetition.
- **Audio TTS Pronunciation & Voice Mode:** Add speech synthesis for language learners and auditory study.

