# Angular Counter App

![Screenshot](https://i.ibb.co/sVG2tGS/counter-app.png)


This Angular application showcases the implementation of a counter with additional features using Angular components, services, and routing.

## Features

- Increment and decrement the counter.
- Double the increment/decrement step every 30 actions.
- Reset the counter to 0 after validating the user's age.
- Keep the counter value if we change or refresh the page.

## Project Structure

- **AppComponent**: The root component that integrates the CounterService and manages the application layout.
- **UpComponent**: Represents the "Up" page, allowing the user to increment the counter.
- **DownComponent**: Represents the "Down" page, allowing the user to decrement the counter.
- **ResetComponent**: Represents the "Reset" page, allowing the user to reset the counter after validating their age.
- **CounterService**: A service responsible for managing the counter state, providing methods to increment, decrement, reset, and observing changes.

## Getting Started

### Prerequisites

- Node.js and npm: Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sabrine-layouni/counter-app.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd counter-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

Run the development server:

```bash
ng serve
