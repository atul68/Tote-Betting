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

#EXACTA
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
Step 1: Clone the project
```
git clone http://td-rhel6-e61f7.dynamic.ocio.cloud.td.com/api-team/com-td-api-framework-performanceFoundation.git
```
Step 2: open command prompt and got to project directory

Step 3: "npm install" it will install all the dependencies

Step 4: "node ." to run node application

Step 5: click on "begin Race" link

Step 6: Enter the bid type, horse number and  bid amount

Step 7: click on submit button

Step 8: repeat step 6 and 7 if you want to bid again

Step 9: click on result link

Step 10: enter result for first, second and third position

Step 11: click on submit button, it will navigate you to dividend page

Step 12: dividend page will show the dividend all the bid type

# How to run test cases:
Step 1: open command prompt and got to project directory

Step 2: "npm install" it will install all the dependencies

Step 3: "mocha" to run test cases.



#Future Scope:
- user management functionality
- data base support
- login functionality for users/punters
- prediction tab which will all previous results

