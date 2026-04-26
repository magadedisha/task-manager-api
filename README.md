# Task Manager API
**Backend Engineer Assignment - Smart Priority System**

This repository contains the submission for the Task Manager API project. The application is a backend web service developed using Node.js and Express, featuring an automated priority logic engine and full task lifecycle management.

---
## Project Overview

The application provides a RESTful interface to manage tasks through three main functional areas:

### 1. Task Creation (Smart POST)
- **Endpoint:** `/tasks`
- **Fields:** Title, Description (optional)
- **Logic:** Automatically runs a **Smart Priority Engine** that scans for urgency keywords (e.g., "urgent", "immediate") and suggests a priority level.
- **Persistence:** Generates unique IDs and defaults status to `pending`.

### 2. Task Completion (PATCH)
- **Endpoint:** `/tasks/:id`
- **Logic:** Identifies a specific task via URL parameters.
- **Action:** Transitions the task status from `pending` to `completed`.
- **Response:** Returns the updated task object for immediate confirmation.

### 3. Task Management (GET)
- **Endpoint:** `/tasks`
- **Logic:** Retrieves the full list of entries currently held in the system memory.
- **Format:** Returns a structured JSON array of all active and completed tasks.

---

## Additional Feature

- **Automated AI Reasoning**
  - Every task created includes an `aiReasoning` field.
  - This feature explains *why* the system chose a specific priority (e.g., "Urgent keywords detected"), providing transparency to the user.

---

## Folder Structure
task-manager-api/
│
├── index.js           # Core API Logic & Server Setup
├── package.json       # Dependency list (Express)
│
├── README.md          # Project documentation (Setup & Usage)
└── DECISION_LOG.md    # Development process & AI usage log
