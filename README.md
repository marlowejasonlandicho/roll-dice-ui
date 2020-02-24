# Roll Dice UI

* The User Interface Application for invoking the Roll Dice Microservice
* The use of Angular Material was leveraged to enable quick turn around of UI Development
* This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Run the server

Run `ng serve -o` to run the application. Navigate to `http://localhost:4200/`

## Navigation

The default home screen is a 3 field UI that contains the following:

* **Number of Dice** : # of dice to roll

* **Number Dice Sides** : # of sides on each dice

* **Number of Rolls** : # of times each dice has to be rolled

The result is a 3 table output which contains the following:

* **Dice Roll Result** : Displays the Dice distribution for the dice number–dice side combination

* **Dice Roll Simulation** : Displays the number of simulations and total rolls made, grouped by all existing dice number–dice side combinations

* **Dice Roll Relative Distribution** : Displays the relative distribution of dice number–dice side combination per total number rolls
