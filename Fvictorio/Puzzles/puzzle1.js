/*
İlk önce bunları açıkla
1) Program counter  Her byte 1 instruction  
2) Opcode
3) Problemi anlat
4) Çözümü anlat

Write an article about Program Counter


The Solutions of EVM Puzzles // 

Hello, In this series, I will try to explain the solutions of EVM Puzzles. I have solved these puzzles while I was trying to learn more about EVM and it was very helpful for me. They provided me the chance to put my newly gained knowledge to use.


EVM Puzzles are created by Franco Victorio(twitter link) who is a software developer at Nomic Foundation/Hardhat. He says:

"A collection of EVM puzzles. Each puzzle consists on sending a successful transaction to a contract. The bytecode of the contract is provided, and you need to fill the transaction data that won't revert the execution."

I would advise you to spend some time studying basics of Ethereum if you are unfamiliar with them.

Here are some resources that will help you along this process:

Mastering Ethereum
Andreas youtube
ethereum.org

How to play
"
git clone https://github.com/fvictorio/evm-puzzles.git
cd evm-puzzles
npm install
npx hardhat play
"

For each puzzle, the bytecode of puzzle contract is given and all we have to do is find out the correct data, value or both without reverting the transaction we sent.

Tools & Resources

It is likely that you will require certain tools that visualize opcodes as you are attempting to solve the challenge. 
The one I'm use is EVM Codes(link)

                            RESİM

Here's the resources that I have used .

THE EVM Handbook(link) by noxx(twitter link)
"A curated list of EVM resources for aspiring shadowy super coders."

Yul Documentation (link)



Solutions

    EVM Puzzle 1  






Solution 1

    Welcome to the 1st part of "The Solutions of EVM Puzzles"


Puzzle 1

00      34      CALLVALUE
01      56      JUMP
02      FD      REVERT
03      FD      REVERT
04      FD      REVERT
05      FD      REVERT
06      FD      REVERT
07      FD      REVERT
08      5B      JUMPDEST
09      00      STOP


First let's look opcodes we have encountered.

CALLVALUE

Pushes the value of the current call in wei onto the stack.
It's the corresponding opcode of msg.value in Solidity.

As an illustration, this contract will push to the stack "4D"(hexadecimal representation of 77) if we called it with msg.value of "77" wei.

JUMP

"The program counter (PC) is a byte offset in the deployed code. It indicates which instruction will be executed next. When an ADD is executed, for example, the PC is incremented by 1, since the instruction is 1 byte. The PUSH instructions are bigger than one byte, and so will increment the counter accordingly.

The JUMP instruction alters the program counter, thus breaking the linear path of the execution to another point in the deployed code. It is used to implement functionalities like functions."

JUMP opcode will take the value that is on top of the stack, set the PC to that value and pop it from the stack.

It's worth noting that If there isn't JUMPDEST opcode where EVM jumps to, transaction will revert.


Solution 

We need to find a way to reach to JUMPDEST location. After we have reached our transaction will be successfully stopped.

JUMP opcode will take the msg.value as parameter and jump to that location. Since JUMPDEST opcode's location is 08 we have to call the contract passing msg.value equal to 8.

You can use this link for simulating this solution. (link)






















*/
