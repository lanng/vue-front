# Login System with Vue3 and Laravel Breeze

This is a personal project login system project built using the Vue3 framework with Vuetify, Vue Router, Axios, and Pinia. It provides a user-friendly interface for user authentication and integrates with a separate back-end API built with Laravel Breeze.

## Project Purpose

This project is a simple demonstration for studying purposes, showcasing the integration of a Vue front-end application with a Laravel API. It serves as an educational example to understand the concepts of building a login system using Vue3 with Vuetify, Vue Router, Axios, and Pinia, along with Laravel Breeze as the back-end authentication system.

The main objective of this project is to provide a hands-on learning experience and to demonstrate the interaction between the front-end and the API, focusing on user registration, login, and password reset functionality.

Please note that this project is intended for educational and learning purposes only and may not cover all production-level requirements or security considerations.

## Features

- User registration: Users can create new accounts by providing their email address and password.
- User login: Registered users can log in using their email and password.
- Password reset: Users can request a password reset link to recover their account.
- Authentication: The system ensures secure authentication for user access.
- Integration with Laravel Breeze: The back-end API, hosted in a separate repository, provides the necessary endpoints for this application to function.

## Technologies Used

- **Vue3**: A progressive JavaScript framework for building user interfaces.
- **Vuetify**: A Material Design component framework for Vue.js.
- **Vue Router**: The official router for Vue.js, providing navigation between pages.
- **Axios**: A promise-based HTTP client for making API requests from the browser.
- **Pinia**: A state management library for Vue.js.
- **Laravel Breeze**: A starter kit for Laravel that provides a simple and minimalistic authentication system.

## Prerequisites

- Node.js (v14.x or higher)
- npm package manager
- Laravel Breeze API (hosted separately, in the repository: [soon](https://github.com/repo)

## Project Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/login-system-vue3.git
    ```
2. Navigate to the project directory:
    ```bash
   cd vue-front
   ``` 
3. Install the dependencies:
    ```bash
   npm install
   ```
4. Update the API endpoint:
   - Open the file `src/services/api.js` in your preferred code editor.
   - Modify the baseURL variable to match the `baseURL` of your Laravel Breeze API.

5. Run the development server:
   ```bash
   npm run serve
   ```
   
6. Access the application: 

   Open your browser and visit `http://localhost:3000` to view the login system.

## Further Information
For more details and customization options, refer to the documentation of the respective frameworks and libraries used in this project:

- [Vue.js Documentation](https://v3.vuejs.org/)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Axios Documentation](https://axios-http.com/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Laravel Breeze Documentation](https://laravel.com/docs/10.x/starter-kits#laravel-breeze)

## Project Status

Please note that this personal project is currently under development and is not yet considered complete. The basic functionality and features mentioned in the "Features" section are being implemented.

I am actively working on fulfilling these features and ensuring that the login system meets the desired requirements. Regular commits and updates will be made to the repository as progress is made.

Feel free to explore the existing codebase, provide feedback, or contribute to the project if you find it interesting. Any suggestions or contributions are welcome!
