# Tote-Betting

```
Git: https://github.com/atul68/Tote-Betting.git
```

## Overview
Tote betting involves punters choosing the outcome of a race by placing bets into a pool of money. Punters who successfully predict the outcome of a race take a share of the pool proportional to their stake. There app support three products with the following rules:

# WIN
- Punters must choose the winner of a race.
- Tabcorp takes a 15% commission from the Win pool.
- The remaining total is split, proportionally to stake, amongst punters who chose the correct winning horse.

# PLACE
- Punters must choose the first, second or third place horse in a race.
- Tabcorp takes a 12% commission from the Place pool.
- The total pool is split evenly into 3 and each of these amounts is then split, proportionally to stake, amongst the punters who chose each placed horse.

# EXACTA
- Punters must choose the first and second place runners in a race in the correct order.
- Tabcorp takes an 18% commission from the Exacta pool.
- The remaining total is split, proportionally to stake, amongst punters who chose the correct first and second horse in correct order.

After a race has been run, Tabcorp publishes the dividends for each product. This is the return for a $1 stake for each paying selection in the race. All dividends are calculated to the nearest $0.01.

# Inputs :

1. Start Betting: A bet is has attributes: product, selections and stake where
- product is one of W, P, E
- selections is either a single runner number (e.g. 4 ) for Win and Place, or two runner numbers (e.g. 4,3) for Exacta
- stake is an amount in whole dollars (e.g. 35)
For example
Bet:W:3:5 is a $5 bet on horse 3 to win
Bet:P:2:10 is a $10 bet on horse 2 to come either first, second or third
Bet:E:5,7:15 is a $15 bet on horse 5 and 7 to come first and second in that order

2. Race Result: A Result is has attributes: first, second and third
For example
Result:5:3:8 represents a race where horse 5 finished first, horse 3 finished second and horse 8 finished third.

# Output :
Output is dividends which are shown in following format product:winning selection:dividend
For example W:2:$2.61 # Win bet on horse 2 yields $2.61 P:2:$1.06 # Place bet on horse 2 yields $1.06 P:3:$1.27 # Place bet on horse 3 yields $1.27 P:1:$2.13 # Place bet on horse 1 yields $2.13 E:2,3:$2.43 # Exacta on horses 2,3 yields $2.43

# How to run application:
Application is built on node version v6.11.2

Step 1: Clone the project
```
git clone https://github.com/atul68/Tote-Betting.git
```
Step 2: Open command prompt and go to project directory

```
cd <folder location where step 1 was executed>\Tote-Betting
```
Step 3: "npm install" it will install all the dependencies

Step 4: "npm start" to start application

Step 5: Open browser and Hit URL : http://localhost:3000/

        Below UI should open up
![Home Page](https://github.com/atul68/Tote-Betting/blob/master/images/homepage.PNG?raw=true "Home Page")

Step 6: Click on "Start a new race" link

        Below UI should open up
![Main Page](https://github.com/atul68/Tote-Betting/blob/master/images/mainpage.PNG?raw=true "Main Page")

Step 7: This page have race id and links of "Start Betting" and "Back to Home Page"

Step 8: Click on "Start Betting" link

        Below UI should open up
![Bet Page](https://github.com/atul68/Tote-Betting/blob/master/images/bet.PNG?raw=true "Bet Page")

Step 9: Enter Bid type[W,P,E are valid bet types], horse number and bid amount, click on submit button
|Type   | Des   |
|W      | Win   |
|P      | Place |
|E      | Exacta|


Step 10: click on submit button

        Below UI showing validate inputs
![Bet Page](https://github.com/atul68/Tote-Betting/blob/master/images/betswithValiddata.PNG?raw=true "Bet Page")

Step 11: IF you have enter valid data, you will get success message on bet page

        As shown below
![Bet Page](https://github.com/atul68/Tote-Betting/blob/master/images/betSuccessResponse.PNG?raw=true "Bet Page with success message")

Step 12: IF you have enter invalid data, you will get a error message on bet page

         As shown below
![Bet Page](https://github.com/atul68/Tote-Betting/blob/master/images/betErrorMessage.PNG?raw=true "Bet Page with error message")
Step 13: Repeat step 9,10 to add more bets

Step 14: Click on result link

Step 13: Enter result for first, second and third position

         As shown below
![Result Page](https://github.com/atul68/Tote-Betting/blob/master/images/resutlValidInput.PNG?raw=true "Result Page")
Step 14: Click on submit button, it will navigate you to Show Dividend page


Step 15: Click on "Show Dividend" link

![Show Dividends Page](https://github.com/atul68/Tote-Betting/blob/master/images/showdividend.PNG?raw=true "Show Dividends Page")
Step 16: This page will show dividend details for all bid types

![Dividends Page](https://github.com/atul68/Tote-Betting/blob/master/images/dividends.PNG?raw=true "Dividends Page")

# How to run test cases:
run "mocha" to run test cases.

# Future Scope:
- user management functionality
- data base support
- login functionality for users/punters/admin
- prediction tab which will have all previous race results

