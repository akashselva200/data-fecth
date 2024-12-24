
function loadSearchResults() {
    const searchResults = document.getElementById("searchResults");
  
    // Fetch data from the JSON file
    fetch("data.json").then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Populate the list dynamically
        searchResults.innerHTML = ""; // Clear any existing items
        data.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = item.name;
          searchResults.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }

function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll("#searchResults li");
  
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(input) ? "block" : "none";
    });
  }
  

window.onload = loadSearchResults;