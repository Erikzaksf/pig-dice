# _Pig Dice_

#### _Pig dice web application game, 08.23.2017_

#### By _**Kristen Kulha, Tyler Miller, Erik Zakrzewski**_

## Description

_Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. The first player to score 100 or more points wins._

## Specifications
  * _When user clicks Play player 1's buttons are shown._
  * _When user clicks "Roll" they're given a random number 1-6._
    * _Example Input: User clicks Roll_
    * _Example Output: 6_
  * _Add number to total for that players turn._
    * _Example before: Roll = 6, previous player turn total is 10_
    * _Example after: Player total is now 16_
  * _If the player rolls a 1, clear the players turn total and end their turn._
    * _Example before: Player turn total is 22, player rolls a 1._
    * _Example after: Player turn total is 0, player ends turn._
  * _If the value of the players roll is 2-6, add it to the players turn total._
    * _Example before: Player turn total is 6, player rolls 6._
    * _Example after: Player turn total is now 12._
  * _If user clicks Hold the players turn total is added to their score and their turn ends._
    * _Example before: Player turn total is 30, their score is 12, they click hold._
    * _Example after: Players score is now 42, it is now the other players turn._
  * _When it is one players turn, the other players roll and hold buttons are hidden._
    * _Example before: Player 1 holds._
    * _Example after: Player 1s buttons vanish, player 2s become visible._
  * _When a players score reaches 100 or more, display that player as the winner._
    * _Example before: Player 1 holds, ending their turn and making their score 102._
    * _Example after: Text alerts player 1 that they are the winner._
  * _When a the new game button is selected, all values will be reset and it will be player 1's turn._
    * _Example before: Game has been completed, a player clicks the reset button._
    * _Example after: Both player scores equal 0 and it is player 1's turn._
## Setup/Installation Requirements

* _Clone or download GitHub repository_
* _Open index.html with web browser of choice_


## Known Bugs

_There are no known bugs at this time._


## Technologies Used

_HTML, Bootstrap, JavaScript, Materialize, jQuery, CSS_

### License

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2016 **_Kristen Kulha, Tyler Miller and Erik Zakrzewski_**
