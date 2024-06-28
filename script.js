document.addEventListener('DOMContentLoaded', function() {
    const addEntryButton = document.getElementById('addEntry');
    const entryList = document.getElementById('entryList');
  
    addEntryButton.addEventListener('click', function() {
      window.location.href = 'add-edit.html';
    });
  
    function loadEntries() {
      const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
      entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = `
          <h2>${entry.title}</h2>
          <p>${entry.date}</p>
          <p>${entry.content}</p>
          <button onclick="viewEntry(${index})">View</button>
        `;
        entryList.appendChild(entryDiv);
      });
    }
  
    loadEntries();
  });
  
  function viewEntry(index) {
    window.location.href = `view.html?index=${index}`;
  }
  