# DECISION_LOG.md

## 1. Time Breakdown
* **12:00 PM – 12:30 PM: Requirements Analysis**
  I received the assignment at 12:00 PM sharp on April 26. I spent the first 30 minutes reading the instructions carefully and taking notes on exactly what was required for the task manager API.
* **12:30 PM – 1:15 PM: Research & Stack Selection**
  I researched how to build APIs on Google. Having worked with PHP and Postman before, I was initially confused about which language to use. My research suggested that Node.js with Express provides simple routing for API development, while Python was also an option. I watched tutorial videos to understand the workflow until 1:15 PM.
* **1:15 PM – 3:00 PM: Project Setup & Core Coding**
  I initialized the Node.js app, set up the file structure, and configured the server port. I performed connectivity tests to ensure the URL and POST requests were working properly and that the app was running. Once confirmed, I spent this time coding the core logic for the endpoints.
* **3:00 PM – 4:00 PM: Documentation & Final Review**
  I began writing the decision file and finalized the project documentation.

## 2. Where AI Was Used — and Why
* **Language Selection & Configuration:** I used AI to help resolve my confusion regarding which language to use for the project. It helped me configure the initial app setup and ensured the environment was ready.
* **Logic & Function Development:** I utilized AI for the `POST` function and the "Smart Priority" logic. It helped me structure how the title and description should be scanned for priority levels.
* **Debugging:** I used AI to resolve specific errors, such as the "Cannot GET /" error, which helped me understand that the root path was not defined.
* **Reasoning:** I chose AI assistance for these parts because I wanted clarity. Moving from PHP to Node.js was a new transition for me, and the AI helped resolve my confusion regarding how the API should function and handle errors.

## 3. Where AI Was NOT Used — and Why
* **Core CRUD Functions:** I wrote the `GET` and `PATCH` functions myself without AI help.
* **Documentation & Logs:** I authored the `README.md` and this `DECISION_LOG.md` manually, as well as the Git setup.
* **Reasoning:** I kept AI out of these areas because I wanted to ensure I personally understood the data flow. By writing the retrieval and update logic myself, I could verify that my project met the requirements accurately and that the documentation reflected my actual work process.

## 4. At Least 2 Bad AI Outputs
* **Case 1: PowerShell Syntax Conflict**
  The AI provided a `curl` command using double-quote escaping (`\"`) for the JSON body. Because I was working in a Windows PowerShell terminal, this caused a `SyntaxError` because PowerShell mangles those characters. I identified this by checking the server logs, realized the JSON was arriving broken, and corrected it by using single-quotes for the data string.
* **Case 2: Over-Complicated Architecture**
  Initially, the AI suggested a complex structure for managing task statuses that involved extra libraries. I identified that this was unnecessary for a simple "pending/completed" requirement. I changed this by simplifying the code to a direct string assignment, which made the app faster and easier to read.

## 5. Trade-offs Made
* **In-Memory Storage:** I decided NOT to build a database (like MongoDB or SQL). I used a simple array instead because setting up a database would have taken too much time away from the 6-hour limit. This shortcut was justified because it allowed me to focus on a working "Smart Feature."
* **Simple Keyword Matching:** Instead of using a complex machine learning API for the "Smart Priority," I used keyword detection. This was a justified trade-off to ensure the API stayed fast and didn't require external API keys or internet dependencies.

## 6. What You Would Improve With More Time
* **User Interface (UI):** I would develop a proper frontend so users don't have to use a terminal to see their tasks.
* **Manual Overrides:** I would add the ability to explicitly change the priority and status of a task from the UI.
* **Results Visualization:** I would add a dashboard to show results and task statistics clearly in a web browser.
