 const data=[
    {
        id: 3,
        question: "Which ruler was known as the 'Napoleon of India'?",
        options: ["Ashoka", "Harsha", "Samudragupta", "Chandragupta I"],
        correctIndex: 2,
      },
      {
        id: 4,
        question: "What is the full form of GDP?",
        options: [
          "Gross Domestic Product",
          "Global Domestic Product",
          "Gross Demand Product",
          "Global Development Product",
        ],
        correctIndex: 0,
      },
      {
        id: 5,
        question:
          "Which state in India is known as the 'Land of Dawn-Lit Mountains'?",
        options: ["Arunachal Pradesh", "Sikkim", "Manipur", "Nagaland"],
        correctIndex: 0,
      },
      {
        id: 6,
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctIndex: 1,
      },
      {
        id: 7,
        question: "Who appoints the Chief Election Commissioner of India?",
        options: [
          "The President",
          "The Prime Minister",
          "The Parliament",
          "The Supreme Court",
        ],
        correctIndex: 0,
      },
]

const container = document.querySelector('body')
data.map(data=>{
container.innerHTML+=`
<div class="quiz-container">
        <div class="header">
            <img src="./logo.png" alt="" height="60px" width="60px">
            <span><strong>Exam MCQ Hub</strong></span>
        </div>
        <br>
        
        <div class="question">
            ${data.question}
        </div>
      
        <div class="options">
            <div class="option" ><strong  contenteditable="false">A. &nbsp;</strong>${data.options[0]}</div>
            <div class="option"><strong contenteditable="false">B. &nbsp;</strong>${data.options[1]}</div>
            <div class="option"><strong contenteditable="false">C. &nbsp;</strong>${data.options[2]}</div>
            <div class="option"><strong contenteditable="false">D. &nbsp;</strong>${data.options[3]}</div>
        </div>

        <button class="save-btn" id="saveBtn">Save</button>
    </div>
`
})
