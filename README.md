<p align="center"><img src="https://github.com/juliamendesc/star-wars-characters/blob/main/.github/logo.png?raw=true" width="80" alt="Ometria's Logo" /></p>
<h1 align="center">Ometria's Take Home Test</h1>
A simple web application to explore the characters of the Star Wars universe, built with React.js and Tailwind CSS.

<p align="center">Made with 💜 by me to <b>join you</b></p>

## Table of Contents
- [Getting Started 🚀](#getting-started-)
- [The Mission 🎯](#the-mission-)
- [The Solution 💡](#the-solution-)
- [The Add-ons and other decisions 🤯](#the-add-ons-and-other-decisions-)
- [Quick Overview on key features 📝](#quick-overview-on-key-features-)
- [Final thoughts 💭](#final-thoughts-)

## Introduction

Dear code reviewer, welcome! 🥳🥳

First of all, thank you for taking your time to evaluate me. I imagine you do this quite often and it should be somehow tedious considering my lack of seniority.

Nonetheless, I truly appreciate the opportunity to have my code reviewed and welcome any comments or tips to improve and become a better programmer, should you wish to offer any.

So, let's begin!

<p align="center">
<img src=https://media.giphy.com/media/3BUYbmXltgQ4zu0Tv5/giphy.gif />
</p>

# Getting Started 🚀

First things first, ensure you have Node.js version 18.x or higher and npm installed. Let's clone the repository and install dependencies::

```bash
git clone https://github.com/juliamendesc/star-wars-characters.git juliamendesc-star-wars-characters && cd juliamendesc-star-wars-characters

npm install
```
Now, you can run the project:

```bash
npm start
```

Now open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was created with [Create React App](https://github.com/facebook/create-react-app) and adapted according to my needs.

# The Mission 🎯

The main goal of this test is to create a simple web application that displays a list of Star Wars characters. The user should be able to search for a character by name and see the results in real-time.

The application should fetch the data from the [Star Wars API](https://swapi.dev/) both for fetching all characters and for the search by character name.

I could choose any technology I wanted to build the application, so I chose React.js and Tailwind CSS to style components, as I am more familiar with both.

# The Solution 💡

Since no design was provided and my artistic creativity is fairly limited, I decided to create a simple and clean interface, with a search bar at the top of the page and a list of characters below it. The user can type the name of the character they are looking for in the search bar and the list will be filtered in real-time.

Below the table, a pagination component was added to navigate through the pages of characters, as the API returns a maximum of 10 characters per page. The user can navigate through the pages by clicking on the page number or using the previous ⬅️ and next ➡️ buttons.

# The Add-ons and other decisions 🤯

I added a few extra features to the application to make it more interesting and fun to use:

- **Context and Provider**: I used React Context to manage the application's state and provide the data to the components. This way, the data is centralized and can be accessed by any component without the need to pass it through props.

- **Loading Spinner**: A loading spinner was added to indicate that the data is being fetched from the API. This way, the user knows that the application is working and that the data will be displayed soon.

- **No Results Modal**: A modal was added to indicate that no characters were found if the search returns no results. This way, the user knows that the search was performed correctly and that there are no characters with the name they are looking for. The modal can be closed by clicking on the "Close" button, by clicking outside the modal or by pressing the "Esc" key. Scroll is also disabled when the modal is open and focus is set on the modal close button.

- **Reset Button**: A button that resets the search bar, the table and the pagination to the initial state, showing all characters again. Especially useful if the user wants to start a new search from scratch. or return to the initial state after a search.

- **Logo**: A logo was added to the top of the page to make the application more visually appealing.

# Quick Overview on key features 📝

I test my application performance and responsiveness using Lighthouse and Chrome DevTools. I also test the application on different devices and browsers to ensure that it works correctly and looks good on all of them.

Feel free to test the application on your own and let me know if you find any bugs or have any suggestions for improvement.

# Final thoughts 💭

I feel very accomplished to finish this test in little time. I shows me how I have evolved in the 3-4 years I have been fully dedicated to this career change.

I believe I am a perfect fit for Ometria and I am very excited to join the team and contribute to the company's growth. I am very eager to learn and improve my skills, and I am sure that I will be able to contribute to the company's success.

```
My main goal since I decided to transition to programming is to learn and enjoy this pleasant ride, so any advice for improvement is highly valuable, even in the event of a negative outcome.
```

Once again, thank you for your time and for all Ometria's team throughout this recruiting process. I felt very welcomed and motivated to join Ometria!

> For the deployed version, please visit [this](https://star-wars-characters-86rihzdx8-juliamendescs-projects.vercel.app/).

<p align="center">
<img src=https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif />
</p>
