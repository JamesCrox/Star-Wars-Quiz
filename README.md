# Star Wars Quiz

I built this quiz app to showcase my javascript skills. This small quiz is targeted for fans of star wars and will test your knowledge on all things Star Wars. The user will have their knowledge tested over 10 mutliple questions. The user will also have the chance to enter their name, into the leaderboard, where they can go up agaisnt friends!

![Responsive mockup](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/starwarsquizresponsivness.png?raw=true)

Click to visit [Star Wars Quiz App](https://jamescrox.github.io/Star-Wars-Quiz/index.html)

## Features 

- __The landing page__

  - As you land on the home page you will be greeted with a welcome message and and the options to start the game or visit the High Scores page. The buttons are interactive and will give the user feedback via a hover-over effect. I chose the Jedi and Sith colors, blue and red.


![Landing Page](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/homepage.png?raw=true )

- __HUD__

  - Once the game has started you will navigate to the quiz app. Here the user will find a HUD display at the top of the page. Here will find  text notifying you of which question out of 10 you are on, a Score out of 1000 and a progress bar which I tried to make look like a lightsaber.
 
![HUD](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/hud.png?raw=true)

- __Quiz navigation__

  - The navigation once in the app is very simple. The user can find a home page icon in the top right corner or a restart icon. once clicked you will either return to the home page or the app will restart with randomised questions as to not land on the same question once refreshed.

![Quiz Nav](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/homerestart.png?raw=true)

- __Questions and Answers__

  - The questions are randomised out of 10 and appear in the same style as the home page text.
  - The user will have four multiple choice answers to choose from. All answers are interactive, where again I chose to use a roll-over method that gives the user feedback that they are on the selected answer.

![Q&A's Section](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/questionanswers.png?raw=true)

- __End Quiz__

  - Once the user has completed the quizz they will be directed to the End quiz page. Here they will find out what score they got. They will also have a choice of entering their name which will enter them onto a leaderboard.
  - Here you will have the choice of either playing again, to see if they can beat their score, or return to the home page. Again, all buttons are interactive with the same rollover effect.

![End Quiz](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/endgame.png?raw=true)

- __High Score Page__ 

  - Once the user has entered their name into the leaderboard and pressed save it will direct them to the leaderboards page. Here you will find Top 5 highscores and the names of the participant. 
  - Once someone beats a top score, the lowest score will be knocked off the leaderboard.

![High Score Page](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/leaderboard.png?raw=true)


## Testing 



### Validator Testing 

- Accessability

  ![Google Lighthouse](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/lighthouse.png?raw=true)
  - 100% Accessability Score via Google Lighthouse generated report 
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fjamescrox.github.io%2FStar-Wars-Quiz%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjamescrox.github.io%2FStar-Wars-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 7 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 1.
      - Largest function has 12 statements in it, while the median is 2.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 1.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings then Pages Tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://jamescrox.github.io/Star-Wars-Quiz/index.html 

## Credits 
For code inspiration and help throughout this module.
- Web Dev Simplified - [Youtube Content Creator for web developers](https://www.youtube.com/c/WebDevSimplified/)
- Brian Designs - [Youtube Content Creator for web developers](https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A/)
- Florin Pop - [Youtube Content Creator for web developers](https://www.youtube.com/c/FlorinPop/)
- James Q Quick - [Youtube Content Creator for web developers](https://www.youtube.com/c/JamesQQuick/)

### Content 

- Icons from [Font Awesome](https://fontawesome.com/)
- Favicon from [favicon.cc](https://www.favicon.cc/?action=icon&file_id=913973)
- Fonts from [Google Fonts](https://fonts.google.com/) 
  - [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One?query=pathway)
  - [Montserrat](https://fonts.google.com/specimen/Montserrat?query=Montserrat)


### Media

- Background image taken from Star Wars Website - [StarWars.com](https://www.starwars.com/news/star-wars-backgrounds)

