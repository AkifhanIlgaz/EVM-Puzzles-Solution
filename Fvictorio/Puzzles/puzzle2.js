/*

Welcome to the 2nd part of "The Solutions of EVM Puzzles"

Puzzle 2

00      34      CALLVALUE
01      38      CODESIZE
02      03      SUB
03      56      JUMP
04      FD      REVERT
05      FD      REVERT
06      5B      JUMPDEST
07      00      STOP
08      FD      REVERT
09      FD      REVERT

Let's look at the opcodes we will use:

CALLVALUE => Push msg.value(in wei) to the stack

CODESIZE => Push the size of contract's code in bytes to the stack

SUB => Pop two values from the stack, subtract them and push result to the stack

Let's see how SUB works by visualising it

    RESİM BEFORE SUB

    RESİM AFTER SUB

Solution

Each opcode is 1 byte so CODESIZE will push 0x0A(10 in hexadecimal) 

To solve this puzzle we need to reach JUMPDEST opcode like we did in the Solution 1 (link).

So CODESIZE - CALLVALUE should be equal to 6.

CODESIZE = 10
    10 - CALLVALUE = 6          Foto şeklinde
    CALLVALUE = 4

You can use this link for simulating this solution. (link)
*/






