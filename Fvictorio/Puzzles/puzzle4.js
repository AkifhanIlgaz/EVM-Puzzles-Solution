/*
Welcome to the 4th part of "The Solutions of EVM Puzzles"

Puzzle 4

00      34      CALLVALUE
01      38      CODESIZE
02      18      XOR
03      56      JUMP
04      FD      REVERT
05      FD      REVERT
06      FD      REVERT
07      FD      REVERT
08      FD      REVERT
09      FD      REVERT
0A      5B      JUMPDEST
0B      00      STOP

Like we did in the previous challenges, we must figure out a way to have the right value in the stack when JUMP is executed.

I have explained CALLVALUE and CODESIZE in the Puzzle 3 (link) so I will not explain them again

XOR => Pop two values from the stack and perform bitwise XOR. Push the result to the stack

Because of LIFO property of the stack, when the result of XOR(CODESIZE, CALLVALUE) will be pushed to the stack.

Solution

JUMPDEST is at location 10, so:

        XOR(CODESIZE, CALLVALUE) = 10   Foto
        CODESIZE = 12
        12 ^ CALLVALUE = 10


There is a nice trick about bitwise XOR

        a ^ b = Result   FOTO
        Result ^ a = b
        
So,

        12 ^ 10 = CALLVALUE
        CALLVALUE = 6

You can calculate the result by pen and paper or you can use online calculator(link)

The correct value of CALLVALUE will be 6

You can use this link for simulating this solution.(link) 

*/
