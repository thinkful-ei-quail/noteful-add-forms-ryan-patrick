import React from 'react';

export default React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {}
});

// This is the schema - what the context should look like
// the data is actually coming from app js
