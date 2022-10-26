/* 
Welcome to the 3rd part of "The Solutions of EVM Puzzles"

Puzzle 3

00      36      CALLDATASIZE
01      56      JUMP
02      FD      REVERT
03      FD      REVERT
04      5B      JUMPDEST
05      00      STOP


CALLDATASIZE => Push the byte size of the calldata

Solution

The solution is very similar to the Puzzle 1 and Puzzle 2 that we have solved before.

We must figure out a way to have the right value in the stack when JUMP is executed.

So, the length of our calldata in bytes must be equal to 4. No matter what our calldata is. If it is 4 bytes it's okay.

I would pass 0x6e6f7878 to solve puzzle

You can use this link for simulating this solution.!!! Calldata'yı değiştir (link) 
*/