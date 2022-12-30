# SUCCESS APP
#### Video Demo:  https://www.youtube.com/watch?v=IOFpHeuZIDA
#### Description:
- This IOS App enables you to boost your confident and become a happier person by investing only a few minutes every day
- You can make daily entries in the app and keep track of
  1. your success
  2. your gratitude
  3. your goals

- I decided to use react native with redux store for this project. With react native it´s easy to build applications for IOS and android with the same code. At the moment the app is only optimised for IOS.
- In the future version of this app I´ll implement a database and backend to save the entries for different users.
### Content:
- Welcome Screen:
  - the first screen the user will see.
  - It displays the logo and name of the app
  - by pressing the Icon on top right it is possible to change the language
  - the app is available in German, English and Spanish
  - We have the option to log in or register for the app
- Register Screen:
  - new users can register here 
  - we have three input fields 
  - if all tree are correctly filled, the button will be enabled to save and move to the next screen
  - TODO: integrate backend and save userdata
- Login Screen
  - registered users can log in here
  - we have two input fields
  - if the fields are filled correctly the button will be enabled
  - after pressing the button the username and password will be checked
  - the user will be redirected to the next screen
  - TODO: get userdata from backend
- Question Screens
  - in the next three Screens the user can answer questions about 
    - success
    - gratitude
    - goals
  - The logic and styling of the screens are similar. I used one component called QuestionComponent for it.
  - After filling all inputs the user can press save and will be redirected to the next screen with the next questions
  - After the goals screen the user will be redirected to the result screen to read all the entries
  - 
### How to start the app on your own IOS device
  to start the app you need to download the expo go app from the app store
  - then execute ```yarn start``` in your terminal
  - a qr code will be crated
  - you can scan it with your camera on your ios device
  - expo go will open the app
  