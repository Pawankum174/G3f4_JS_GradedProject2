// Function to handle the "Previous" button click
function handlePrev() {
    // Get an array of all search result IDs
    const allIds = window.searchResults.map((s) => s.id);
    // Find the index of the current item's ID in the array
    const currResultIdx = allIds.indexOf(window.currItem.id);
    // Render the previous search result
    renderSearchResult(window.searchResults[currResultIdx - 1]);
  }
  
  // Function to render a search result in the resume display area
  function renderSearchResult(searchResult) {
    // Update the current item being displayed
    window.currItem = searchResult;
  
    //function to show the resume and hide the search results
    showResumeAndHideSearchResults();
  
    // Rendering various sections of the resume through diffrent functions and the parameter has been taken from data
    renderResumeHeader(searchResult.basics.name, searchResult.basics.AppliedFor);
    renderPI(searchResult.basics);
    renderTechnicalSkills(searchResult.skills.keywords);
    renderHobbies(searchResult.interests.hobbies);
    renderCompanyDetails(searchResult.work);
    renderProject(searchResult.projects);
    renderEducation(searchResult.education);
    renderInternship(searchResult.Internship);
    renderAchievements(searchResult.achievements.Summary);
    // Check and disable navigation buttons based on the current search result
    checkAndDisableNavButtons(searchResult);
  }
  
  // Function to show the resume and hide the search results
  function showResumeAndHideSearchResults() {
    document.getElementById("search-result-area").style.display = "none";
    document.getElementById("resume-display-area").style.display = "block";
  }
  
  // Function to render the resume header with name and applied for information
  function renderResumeHeader(name, appliedFor) {
    // Get DOM elements for name and applied for
    let nameNode = document.getElementById("name");
    let appliedForNode = document.getElementById("appliedFor");
    // Update the elements with the provided information
    nameNode.innerText = name;
    appliedForNode.innerText = appliedFor;
  }
  
  // Function to render personal information (PI) in the resume(basics is from data.js)
  function renderPI(basics) {
    // Get DOM elements for mobile number, email, and LinkedIn
    let mNum = document.getElementById("mobile-number");
    let email = document.getElementById("email");
    let linkedin = document.getElementById("linkedin");
  
    // Update the elements with personal information provided in data.js
    mNum.innerText = basics.phone;
    email.innerText = basics.email;
  
    // Create a link for LinkedIn and update it
    linkedin.innerHTML = "";
    let lNode = document.createElement("a");
    lNode.innerText = "Linkedin";
    lNode.href = basics.profiles.url;
    linkedin.appendChild(lNode);
  }
  
  // Function to render technical skills in the resume
  function renderTechnicalSkills(keywords) {
    // Get the DOM element for technical skills
    let tech_skills = document.getElementById("tech-skills");
    tech_skills.innerHTML = "";
    // Render each technical skill (from data.js) and add line breaks
    keywords.forEach((k) => {
      tech_skills.appendChild(document.createTextNode(k));
      tech_skills.appendChild(document.createElement("br"));
    });
  }
  
  // Function to render hobbies in the resume
  function renderHobbies(hobbies) {
    // Get the DOM element for hobbies
    let hobbiesNode = document.getElementById("hobbies");
    hobbiesNode.innerHTML = "";
    // Render each hobby and add line breaks
    hobbies.forEach((h) => {
      hobbiesNode.appendChild(document.createTextNode(h));
      hobbiesNode.appendChild(document.createElement("br"));
    });
  }
  
  // Function to render company details in the resume
  function renderCompanyDetails(companyDetails) {
    // Get DOM elements for company details
    let prevCompanyName = document.getElementById("prev-company-name");
    let prevCompanyPosition = document.getElementById("prev-company-position");
    let prevCompanyStartDate = document.getElementById("prev-company-start-date");
    let prevCompanyEndDate = document.getElementById("prev-company-end-date");
    let prevCompanySummary = document.getElementById("prev-company-summary");
  
    // Update the elements with company details(from data.js)
    prevCompanyName.innerText = companyDetails["Company Name"];
    prevCompanyPosition.innerText = companyDetails.Position;
    prevCompanyStartDate.innerText = companyDetails["Start Date"];
    prevCompanyEndDate.innerText = companyDetails["End Date"];
    prevCompanySummary.innerText = companyDetails.Summary;
  }
  
  // Function to render a project in the resume
  function renderProject(project) {
    // Get the DOM element for project details
    let projectNode = document.getElementById("project-details");
    projectNode.innerHTML = "";
    // Get project name and description from data.js
    let pname = project.name;
    let pdesc = project.description;
  
    // Create elements for project name and description and update them
    let pnameNode = document.createElement("b");
    pnameNode.innerText = pname + ": ";
    let pdescNode = document.createElement("span");
    pdescNode.innerText = pdesc;
    // Append the elements to the project details
    projectNode.appendChild(pnameNode);
    projectNode.appendChild(pdescNode);
  }
  
  // Function to render education details in the resume
  function renderEducation(education) {
    // Get DOM elements for education details
    let ugNode = document.getElementById("ug");
    let ssNode = document.getElementById("senior-secondary");
    let hsNode = document.getElementById("high-school");
  
    // Update elements with education details
    ugNode.innerText = `${education.UG.institute}, ${education.UG.course}, ${education.UG["Start Date"]}, ${education.UG["End Date"]}, ${education.UG.cgpa}`;
    ssNode.innerText = `${education["Senior Secondary"].institute}, ${education["Senior Secondary"].cgpa}`;
    hsNode.innerText = `${education["High School"].institute}, ${education["High School"].cgpa}`;
  }
  
  // Function to render internship details in the resume
  function renderInternship(internship) {
    // Get DOM elements for internship details
    let prevInternName = document.getElementById("internship-name");
    let prevInternPosition = document.getElementById("internship-position");
    let prevInternStartDate = document.getElementById("internship-start-date");
    let prevInternEndDate = document.getElementById("internship-end-date");
    let prevInternSummary = document.getElementById("internship-summary");
  
    // Update elements with internship details
    prevInternName.innerText = internship["Company Name"];
    prevInternPosition.innerText = internship.Position;
    prevInternStartDate.innerText = internship["Start Date"];
    prevInternEndDate.innerText = internship["End Date"];
    prevInternSummary.innerText = internship.Summary;
  }
  
  // Function to render achievements in the resume
  function renderAchievements(achievements) {
    // Get the DOM element for the list of achievements
    let achievementList = document.getElementById("achievements");
    achievementList.innerHTML = "";
    // Render each achievement as a list item
    achievements.forEach((a) => {
      let lNode = document.createElement("li");
      lNode.innerText = a;
      achievementList.appendChild(lNode);
    });
  }
  // Function to check and disable navigation buttons based on the current search result
  function checkAndDisableNavButtons(searchResult) {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    // Get an array of all search result IDs
    const allIds = window.searchResults.map((s) => s.id);
    // Find the index of the current item's ID in the array
    const currResultIdx = allIds.indexOf(searchResult.id);
  
    // Show both "Prev" and "Next" buttons by default
    prevButton.style.visibility = "visible";
    nextButton.style.visibility = "visible";
  
    // Hide "Prev" button if at the first result
    if (currResultIdx === 0) {
      prevButton.style.visibility = "hidden";
    }
  
    // Hide "Next" button if at the last result
    if (currResultIdx === allIds.length - 1) {
      nextButton.style.visibility = "hidden";
    }
  }
  
  // Function to update the page after a search
  function updateAfterSearch() {
    // Get the search keyword from the search bar
    let searchKeyword = document.getElementById("searchbar").value;
  
    // If the search bar is empty, show the first resume and reset search results
    if (searchKeyword.length === 0) {
      window.currItem = data.resume[0];
      window.searchResults = data.resume;
      document.getElementById("next-btn").style.display = "inline";
      document.getElementById("prev-btn").style.display = "inline";
      renderSearchResult(data.resume[0]);
      return;
    }
    // Perform a search and update the search results
    let searchResults = search(searchKeyword);
    window.searchResults = searchResults;
    let listDiv = document.getElementById("search-results");
    listDiv.innerHTML = "";
    // If no results are found, display an error message
    if (searchResults.length === 0) {
      listDiv.innerHTML = `
              <div style="border: 1px solid black; border-radius: 10px; padding: 20px; margin-left: 20%; margin-right: 20%">
                  <img width='80' height='80' src='error.png' alt='No results found'/>
                  <span style="text-align: center; position: absolute; top: 100px;"> No results found</span>
              </div>
          `;
    }
  
    //calling function for Showing the search results and hide the resume
    showSearchResultsAndHideResume();
  
    // Render the search results as links
    searchResults.map((s) => {
      let elem = document.createElement("li");
      elem.appendChild(createSearchResultLink(s));
      listDiv.appendChild(elem);
    });
  }
  
  // Function to perform a search and filter results by applied for
  function search(value) {
    return data.resume.filter((n) =>
      n.basics.AppliedFor.toLowerCase().startsWith(value.toLowerCase())
    );
  }
  
  // Function to show search results and hide the resume
  function showSearchResultsAndHideResume() {
    document.getElementById("search-result-area").style.display = "block";
    document.getElementById("resume-display-area").style.display = "none";
  }
  
  // Function to create a search result link
  function createSearchResultLink(searchResult) {
    let elem = document.createElement("a");
    elem.innerText = searchResult.basics.name;
    elem.setAttribute("href", "#");
    elem.addEventListener("click", () => renderSearchResult(searchResult));
    elem.setAttribute("data", `result: ${searchResult}`);
    return elem;
  }
  
  // Function to handle the "Next" button click
  function handleNext() {
    // Get an array of all search result IDs
    const allIds = window.searchResults.map((s) => s.id);
  
    // Find the index of the current item's ID in the array
    const currResultIdx = allIds.indexOf(window.currItem.id);
  
    // Render the next search result
    renderSearchResult(window.searchResults[currResultIdx + 1]);
  }
  
  // Initialize the searchResults and currItem with the first resume and render it
  window.searchResults = data.resume;
  window.currItem = data.resume[0];
  renderSearchResult(data.resume[0]);