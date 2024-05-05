let resumeData = { "resume": [] }
let Resumes = resumeData['resume'];
let currentCandidate = 0;

// Header area
const lastCandidate = document.getElementById('lastCandidate');
const nextCandidate = document.getElementById('nextCandidate');
const searchArea = document.getElementById('search');

// Resume area
const resumeInfo = document.getElementById('resumeInfo');
const noCandidateFound = document.getElementById('noCandidateFound');
const resumeContainer = document.getElementById('resumeContainer');
const employeeName = document.getElementById('name');
const appliedFor = document.getElementById('appliedFor');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const technicalSkills = document.getElementById('technicalSkills');
const hobbies = document.getElementById('hobbies');
const previousCompanyDetails = document.getElementById('previousCompanyDetails');
const projectDetails = document.getElementById('projectDetails');
const education = document.getElementById('education');
const internship = document.getElementById('internship');
const achievements = document.getElementById('achievements');



// Choose buttons to be shown based on currentCandidate and candidate Resumes
const validateDisplayButtons = () => {
    if (currentCandidate + 1 >= Resumes.length) {
        nextCandidate.style.visibility = "hidden";
    } else {
        nextCandidate.style.visibility = "visible";
    }
    if (currentCandidate === 0) {
        lastCandidate.style.visibility = "hidden";
    } else {
        lastCandidate.style.visibility = "visible";
    }
}


// Will fill the data in all the html placeholders based on currently selected resume from json
const getResumeData = () => {
    const currentResume = Resumes[currentCandidate];
    employeeName.innerText = currentResume['basics']['name'];
    appliedFor.innerText = currentResume['basics']['AppliedFor'];
    email.innerText = currentResume['basics']['email'];
    phone.innerText = currentResume['basics']['phone'];
    linkedin.href = currentResume['basics']['profiles']['url'];

    technicalSkills.innerHTML = `<div>${currentResume['skills']['keywords']
    .map(keyword => `<p>${keyword}</p>`)}</div>`
    .replaceAll(',', '');

    hobbies.innerHTML = `<div>${currentResume['interests']['hobbies']
    .map(keyword => `<p>${keyword}</p>`)}</div>`
    .replaceAll(',', '');

    previousCompanyDetails.innerHTML = `<div>${Object.keys(currentResume['work'])
    .map(key => `<p class="innerDetail"><b>${key}</b>:${currentResume['work'][key]}</p>`)}</div>`
    .replaceAll(',', '');

    projectDetails.innerHTML = `<p class="innerDetail"><b>${currentResume['projects']['name']}</b>:${currentResume['projects']['description']}</p>`;

    education.innerHTML = `<ul>${Object.keys(currentResume['education'])
    .map(education => `<li><b>${education}:</b>${Object.keys(currentResume['education'][education])
    .map(educationKey => `<span> ${currentResume['education'][education][educationKey]}</span>`)}</li>`)}</ul>`
    .replaceAll(',', '');

    internship.innerHTML = `<ul>${Object.keys(currentResume['Internship'])
    .map(key => `<li><b>${key}</b>: ${currentResume['Internship'][key]}</li>`)}</ul>`
    .replaceAll(',', '');

    achievements.innerHTML = `<ul>${currentResume['achievements']['Summary']
    .map(achievement => `<li>${achievement}</li>`)}</ul>`
    .replaceAll(',', '');
}


// calculate length of filtered resumes based on search criteria
const validateCandidateResumes = () => {
    if (Resumes.length > 0) {
        noCandidateFound.style.display = 'none';
        resumeContainer.style.display = 'block'
    } else {
        noCandidateFound.style.display = 'flex';
        resumeContainer.style.display = 'none'
    }
}


//get data from Data.json
/*⦁	Each applicant's details should be fetched from the JSON file and displayed in the web page.*/

function data(){
    useEffect(()=>{
fetch('Data.json')
    .then(response => response.json())
    .then(json => console.log(json))
    
        resumeInfo.style.display = 'none';
        resumeData = respData;
        candidateResumes = resumeData['resume'];
        validateCandidateResumes();
        validateDisplayButtons();
        getResumeData();
    },[]);
}
    // .catch(error => {
        // alert('unable to load page');
        // resumeInfo.style.display = 'none';
        // resumeData = data;
        // Resumes = resumeData['resume'];
        // validateCandidateResumes();
        // validateDisplayButtons();
        // getResumeData();
    // })


    // filter resumes and save to array Resumes and validates what buttons to show
/*⦁	The web application should also have filtering capability where when searched for a particular job,
only applications of that job openings should be displayed.
*/

searchArea.oninput = function (event) {
    const searchCriteria = event.target.value;
    if (searchCriteria.length > 0) {
        Resumes = resumeData['resume'].filter(resume => resume['basics']['AppliedFor'].toLowerCase()
        .includes(searchCriteria.toLowerCase()));
    } else {
        Resumes = resumeData['resume'];
    }
    currentCandidate = 0;
    if (candidateResumes.length > 0) getResumeData();
    validateCandidateResumes();
    validateDisplayButtons();
}

// get next candidate resume 
// checks what buttons to show as currentCandidateSequence got changed
/*⦁	When clicked on Next or Previous Buttons in the web page,
the next or previous applicant details should be displayed irrespective of the job they applied for*/

const nextCandidateClick = () => {
    currentCandidate = currentCandidate + 1;
    getResumeData();
    validateDisplayButtons();
}

// get previous candidate resume
// checks what buttons to show as currentCandidateSequence got changed
/*⦁	When clicked on Next or Previous Buttons in the web page, the next or previous applicant details should be displayed irrespective of the job they applied for*/

const lastCandidateClick = () => {
    currentCandidate = currentCandidate - 1;
    getResumeData();
    validateDisplayButtons();
}

validateDisplayButtons();




