# Tic-Tac-Toe
My Tic-Tac-Toe Project

To tackle the challenges of this project I broke down all of the core elements and decided to focus on just the very main and basic components.
This means that I was not going to attempt anything fancy or stylish as this would cost considerable time and energy that I did not have. 

I decided to just focus on setting up and creating all three of the criticals files for this game to run on. HTML, CSS and JavaScript. 
I made sure to get these filled out and tested to make sure these were properly linked so I know that correct code will run to save any future hassle.
A standard 9 square grid with each of them being numbered 0-8 as per the array index. It was critical at this point to note and adjust my combinations
to factor in that the squares starting at 0 meant that I had to count [0, 1, 2] and not [1, 2, 3] as that would create a lot of bugs and brick any code
that would have been otherwise correct.

As this code was the lengthiest and most complex that I have done so far, I committed my changes regularly just in case I created bugs and couldn't revert
back to a point where the code worked previously. Creating some test code and noting it out for later was also something I did as I needed .

Once I managed to get the X and O's up and clicking, I had to spend a while creating the winning combination for both of them. After a while, I finally got all of the winning combinations done and with even more of a while, managed to get it so that they cannot overwrite eachother.

Although I could get all winning combinations for both players done correctly, I could still keep on clicking boxes and continuing the game in a very buggy way. Once I managed to utilise the code to prevent that for one combination, I applied this to all of the other combinations so that once the game was won by either player, no more boxes can be clicked and no more display messages could appear. This was a tricky bug that was quite easy to identify but challenging for me to properly fix.

Once all of those were working, I had to make sure the stalemate would occur on the 9th move but NOT if that same very last move was a winning move, as unlikely as that scenario is. Fortunately, the code was right and after testing, that last component did not need to be changed and this resulted in a fully playable game of Tic-Tac-Toe that I just need to stylise. 

Some things I can add down the line to improve this include:
A restart button - So I don't have to constantly click refresh
An extended gameboard size - Having 9 squares means it's very easy for players to constantly get a stalemate scenario as there isn't enough combination variables for most people to have to build a memory and skill towards. 
A counter/number to keep track of who wins - I Could add +1 point to the winner of each game and a + 0 and make a best out of 3 or best out of 5

This game can be accessed via the link below
https://adrian484.github.io/Tic-Tac-Toe/
