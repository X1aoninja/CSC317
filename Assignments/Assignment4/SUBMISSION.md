# CSC 317 Assignment 4 Submission

**Name:** Zhien Lou
**Student ID:**  922613936
**GitHub Username:** X1aoninja
**Assignment Number:** 4


# Calculator Assignment Analysis

## Analysis
For this project, I created a fully functional calculator using HTML, CSS, and JavaScript. The calculator includes all basic arithmetic operations (addition, subtraction, multiplication, division), as well as utility functions like clear, sign toggle, percentage, and decimal input. Additionally, I implemented memory functionality including MR (Memory Recall), M+ (Memory Add), M- (Memory Subtract), and MC (Memory Clear).

The project helped me solidify my understanding of DOM manipulation, event handling, and state management in JavaScript. I also used CSS to style the calculator, giving it a clean, grid-based layout similar to mobile calculator apps. Buttons include visual feedback through simple animations, and the display area is scrollable to accommodate long numbers.

While building this project, I experimented with layout strategies (like CSS Grid), visual responsiveness, and user experience improvements such as button animations and keyboard input support. This provided hands-on experience with structuring interactive UIs and maintaining internal logic for user-driven apps.

## Approach
To build the calculator, I began by structuring the HTML layout using a clean grid system to position buttons and the display area. I then wrote the JavaScript to handle calculator logic such as updating the display, parsing numeric inputs, handling operators, and maintaining a current/previous value system.

I broke down the JavaScript logic into small reusable functions such as appendNumber, chooseOperator, evaluate, clear, and more. Once the core logic was working, I added support for memory functions including M+, M-, MR, and MC, which required persistent storage using a memory variable.

For styling, I used CSS Grid to lay out the calculator buttons and added visual polish through consistent spacing, color themes (gray/dark/orange), and button animations. I also made the display scrollable and added keyboard input handling for a smoother user experience.

## Difficulties
One of the main challenges was properly managing calculator state across multiple interactions, especially when chaining operations or recalling from memory. Initially, I encountered issues where evaluating an expression after memory recall would break the flow of inputs.

Another challenge was ensuring the layout stayed clean and accessible across screen sizes, and debugging issues where button actions conflicted with the keyboard logic. Adding smooth animations and ensuring the display didn't overflow also required extra testing and fine-tuning.




