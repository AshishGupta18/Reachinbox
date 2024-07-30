# Dashboard Application

This project is a React-based dashboard application that includes various features such as navigation, mail fetching, and a custom text editor. The application is styled using Tailwind CSS and supports both dark and light themes.

## Features

1. **Navigation**: The sidebar navigation includes links to Home, Profile, Mail, Send, Tasks, and Reports.
2. **Mail Fetching**: Fetches a list of emails from an API and displays them in the dashboard.
3. **Custom Text Editor**: A rich text editor for composing emails, including "To", "From", and "Subject" fields, as well as buttons for sending, adding variables, and other functionalities.
4. **Dark and Light Theme**: Users can toggle between dark and light themes using a sun and moon toggle button.

## Implementation Choices

### Component Structure

- `Dashboard.jsx`: The main component that includes the sidebar navigation and renders different content based on the active menu item.
- `CustomEditor.jsx`: The custom text editor component for composing emails.
- `ThreadDetails.jsx`: A component that shows details of a selected email thread.

### Styling

- **Tailwind CSS**: Used for styling the entire application, providing utility-first CSS classes for rapid UI development.
- **Dark and Light Themes**: Implemented using a state variable and conditional classes to switch between themes.

### API Integration

- **Fetching Mail List**: Uses the `fetch` API to get a list of emails from the backend. The JWT token is stored in `localStorage` and included in the Authorization header of the request.

### Error Handling

- **API Error Handling**: If the mail list fetching fails, an error message is displayed to the user.

## Instructions

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AshishGupta18/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**:

```
npm install
```
   


## Usage
Navigate: Use the sidebar to navigate between Home, Profile, Mail, Send, Tasks, and Reports.
Fetch Mail: Click on the "Mail" menu to fetch and display the list of emails.
Compose Email: Click on "Home" to open the custom text editor and compose an email.
Custom Editor Styling
The custom editor is styled to resemble a typical email composer, with fields for "To", "From", "Subject", and a text editor for the email body. The editor also includes buttons for sending the email, adding variables, and other functionalities.

## Theme Toggle
A sun and moon icon toggle button allows users to switch between dark and light themes.

## Additional Info
API Endpoints:

GET /api/v1/onebox/list: Fetch the list of emails.
POST /api/v1/onebox/reply/:thread_id: Send a reply to an email thread.
Bearer Token: The JWT token is stored in localStorage and included in the Authorization header for API requests.
