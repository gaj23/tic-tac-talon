# 🦃 Tic-Tac-Talon 🦅

Did you know that Benjamin Franklin originally proposed the United States' national bird to be the turkey? Now is your chance to pit the Turkey and the Bald Eagle against each other in an interactive game of tic-tac-toe!

This project is a culmination of learning goals in module 1 at Turing School of Software & Design. The main points are to demonstrate my understanding of:
- local storage so scores may persist upon refresh
- event delegation to allow the playing board to be interactive
- delegation of work functions complete
- keeping the DOM and the data separate

## To View
To view and interact with this application please clone down and view from your local path.
To clone, please copy and paste the following into your terminal: `git clone git@github.com:gaj23/bird-is-the-word.git`.
No other software is necessary. Please check if your preferred browser is up to date to provide as smooth as possible interactions.  

Starting Board  
<img src="https://user-images.githubusercontent.com/68332132/98760970-6c163180-23a2-11eb-8388-aedecc233921.png" alt="starting gameboard appearance">

Winning Screen  
<img src="https://user-images.githubusercontent.com/68332132/98761214-f78fc280-23a2-11eb-9f9e-50d967c5b8d5.png" alt="example of winning scenario">

Tie Screen  
<img src="https://user-images.githubusercontent.com/68332132/98761204-f199e180-23a2-11eb-9fa1-835f65f4127d.png" alt="example of a tie scenario">


### Technologies Used in Creation
- Atom
- Chrome Dev Tools
- [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

## Reflections
### Planning  
Once I started Wireframing, I couldn't stop. I found it to be an incredible tool to use that allowed me to think ahead to necessary classes, ids, and interactions that would be occurring. With my based wireframe, I would layer a blank sheet on top and then whiteboard out the necessary steps to whatever feature I was working on.
<details>
<summary>Wireframing & Whiteboarding</summary>
<br>
<img src="https://user-images.githubusercontent.com/68332132/98761145-d3cc7c80-23a2-11eb-9a04-a8f1a7e1cd5c.png" alt="base wireframe">
<img src="https://user-images.githubusercontent.com/68332132/98761148-d5964000-23a2-11eb-92ae-fc4cb27e3f92.png" alt="feature whiteboarding">
</details>

Originally, I had planned to utilize github's kanbans as I have in the past when working in pairs or groups. However, I found that having a document that laid out each day with tasks I wanted to complete or questions I wanted answers to allowed me to see the overarching timeline. Kanbans are highly beneficial for mulit-player work, but for single player work, I felt as if they were unhelpful in keep the overall project vision and direction in mind.
<details>
<summary>Pages Layout</summary>
<br>
<img src="https://user-images.githubusercontent.com/68332132/98760705-d1b5ee00-23a1-11eb-90a6-de1c401a77db.png" alt="daily task breakdown">
<img src="https://user-images.githubusercontent.com/68332132/98760704-d11d5780-23a1-11eb-865b-d4c58141f5bf.png" alt="daily task breakdown continued">
</details>

###General
I'm incredibly proud of the work there in. While simple in appearance, I feel confident in the code I wrote. I spent significant portions of my time considering how and where to refactor my code. This is something that I struggled to address in previous projects, but faced it head on. In the face of bugs, while frustrated, I felt comfortable that I could sniff them out and squash them. I truly hope in this most updated version (as of 11/10) there are no bugs that will affect user game play.

###Future Iterations & Second-Looks
#### CSS & HTML
- I would like to have the bird calls to be incorporated into the win conditions!
  - This would require research on how to manipulate audio into a file and the necessary syntax to call it automatically upon win declaration.
- I would like there to be a mouseover event on the images that would reveal the links to the Audubon pages in a more obvious fashion. At this point, unless by accident, I doubt a user would find this.
  - Or, I could include the name of the bird beneath the image and then link that text which innately triggers a user to click it due to the overall recognizable features of a hyperlink.

#### JavaScript
- I would like to have 0 displayed inside of the score box rather than a blank
  - This was a constant problem I tried to solve many ways: - be sure to have a default - create a conditional statement asking if the score values were null or undefined to assign the innerText to 0
  - In efforts to account for user experience, but to table for a refactoring, I added the box and styling to create the assumption that this is where the score will go once a user *has* a score to display.
- I would like to incorporate an array of fun facts about each bird and upon a win of that bird, one of those facts are displayed on a popup on screen.
  - I would need to research the different types of popups that can occur on the scree because I'm interested in something other than an alert, perhaps a timed event.

##Contributions & Thanks
Additional thanks to all who offered me technical and emotional support during the completion of this project. I am indebted to their guidance and input: Casey Dallavalle(@cbdallavalle), Jeannie Evans(@jmevans0211), and Josh Antonson(@jantonso).

If you are interested in contributing please:
- clone down this repo: `git@github.com:gaj23/bird-is-the-word.git`
- create a new branch: `git checkout -b your-initials/feature/feature-name`
- contribute as you like
- in the terminal, push the branch upstream
- create a pull request via github
- wait for our reply
Thank you in advance for your input!

###Contact
Please follow me on github or to reach out about this or any other projects: Gabrielle Joyce @gaj23  

Thank you!
