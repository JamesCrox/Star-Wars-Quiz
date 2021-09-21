# Star Wars Quiz

The Dirty Bird is a Late night Cocktail & Gin Lounge in located in Bristol, Clifton Area just situated off Kind's Road. 
This website is inteded for people who seek out late night cocktail and Gin lounge. The website will feature a home page, drinks, bookings and contact pages. Within these pages the user can navigate through with ease and gain all information about the bar as they require.

![Responsive mockup](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/starwarsquizresponsivness.png?raw=true)

Click to visit [Star Wars Quiz App](https://jamescrox.github.io/Star-Wars-Quiz/index.html)

## Features 

- __The landing page__

  - As you navigate through the home page the user will find imagary of the bar, a section for upcoming events, a small gallery of images and a contact and opening times section.
  - The events section will keep the user informed of any upcoming events happening within the venue.

![Landing Page](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/homepage.png?raw=true )

- __HUD__

  - The navigation bar is simple but effective. You will know what page you are on by used of a simple underline on the active page. 
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![HUD]()

- __Questions and Answers__

  - The gallery will be a responsive and interactive gallery that will feature a rollover animation. Following the gallery is a small section that shows the user the opening and closing times of the venue and a small contact section. 
  - The gallery has a hover effect where the images will turn grayscale when hovered over with the mouse. I got this idea from a project I saw on [Codepen.io](https://codepen.io/trending).
  - The Flexbox method was used on this gallery for responsivness.

![Q&A's Section](https://github.com/JamesCrox/Star-Wars-Quiz/blob/main/assets/images/readme-images/questionanswers.png?raw=true)

- __Opening Times and Contact section__

  - This section show the opening and closing times of the Bar. 
  - I also included the Contact Details of the venue address and the email address. 

![Opening Times and Contact Section]()

- __The Footer__ 

  - The footer section includes links to the Dirty Bird social media sites, Facebook and Instagram. These links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer]()

- __Drinks__

  - Moving on to the Drinks page, the user will be able to see what is on offer at this venue. I will have this laid out as a simple menu with discriptions of drinks. The menu will be broken down into 4 different sections and have a matching picture for their section.

  - This section is valuable to the user as they will be able to easily identify the types of drinks that are served in the venue.. 

![Drinks]()

- __Bookings__

  - Bookings page will have a Form for conacting the venue about any specific booking equiries that the user may have wether it be about booking a table or the venue as a whole, cocktail master classes or any other events they may be looking for.

![Bookings page]()

- __Contact__

  -  The contact page will be another form which will give the user means of getting in contact with the Venue. They will have a interactive Map on this page where they will be able to get directions to the venue from Google maps. 

![Contact]()

## Testing 

While testing throughout the project iI ran into a few bugs that I managed to resolve myself.

- Center Align
  - I had some trouble at the start of the project with getting the navigation to center align, but I think this was purely because I didn't understand the correct code.
- Errors that occured when using validating code.
  - A few minor errors that were easy to fix on the booking form. 
      - Adding a min and max value for a text box. not needed removed.
      - Adding fixed value to a textarea box. Removed and targeted in CSS 
  - Using width % value on iframe. Tageted in css and style appropriately. 
  - Duplicate IDs used on one page. Chaned them to classes instead
  - Using a H5 element within a table. Removed and used em element. Targeted in Css and styled appropriately.
  - Some minor fixes when using the table data and table rows elements. Removed images from inside the table that were causing errors.
  - Improper use of Aria lables - removed 

### Validator Testing 

- Accessability

  ![Google Lighthouse]()
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

### Content 

- Icons from [Font Awesome](https://fontawesome.com/)
- Favicon from [favicon.cc](https://www.favicon.cc/?action=icon&file_id=913973)
- Fonts from [Google Fonts](https://fonts.google.com/) 
  - [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One?query=pathway)
  - [Montserrat](https://fonts.google.com/specimen/Montserrat?query=Montserrat)

### Media

- All photos used on pages were supplied to me by the dirty bird management. All photos were taken by Nic Pedron.