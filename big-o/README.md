# Big O Notation

Basically, Big O Notation is how well the problem is solved (by code obviously). But, what is good code?
There are 2 criteria for a good code, Readable which is can be read by other programmers and also Scalable, code that can be scaled.

## Good Code?

-  [x] Readable.
-  [x] Scalable = Speed (time complexity) & Memory (space complexity).
-  When a program executes, we have to remember 2 things, the heap and the stack. The heap usually where we store variables that we assign values to. The stack is usually where we keep track of our functions call.
-  What is causes space complexity? Variables, Data Structure, function call, Allocations. `spacecomp.js`.

## O(n) (linear time)

We can test how well the code solve some problem using time. `O(n)` or linear time (on `example1.js`). But actually it depends on what kind of computer performance to test the time performance.
So when we talk about Big O and Scalability, it testing about when we grow/scale our code bigger and bigger input (INCREASES), how much does the algorithm or function to slowing down.
On the `example1.js`, it shows that the `n` is depends on how many input/array stored. For example `O(nemo) = O(1)`, `O(character) = O(the number of array)`, and `O(big) = O(how many number on array)`. The number of operation increase LINEARLY with the input we made.
O(n) is the basic of Big O Notation you can find.

## O(1) (Constant Time)

The number of operation just stay constant depends of the number of element. Like in `example2.js`. No matter how many array element extracted from the `boxes` array, it always be O(1/2/3~) operation.

## Excercise!

Learn how to count how many Big O Notation process on single file (`challenge1.js and challenge2.js`).
But if we simplifying the Big O, all of the file actually just `O(n)`.

## Big O Rules

There are 4 Rules of Big O

### 1. Worst Case Scenario

To make our code to be more efficent, we need to make sure that every functions or tasks executed properly.
For example, on `example1.js`, we have a function to `find Nemo`, but we know in the array, Nemo can be found on the fourth index of array. But the function forced to find the Nemo until the last index of Array, which is not efficient. So, we need to give a `break` when the `Nemo` is found.

### 2. Remove Constants

On the Big O we don't really care how steep the line is, we care about the line moves as our inputs increases (`charts.jpeg`). For example, on `constants.js` we see that no matter if we drop other notation `(O(1) + O(100))`, it doesn't matter if the main input is 1 Million input. So basically we can simpiflying the Big O. Again, we care when the input bigger and bigger the number of operation still linear to the input, like on the `charts.jpeg`.

### 3. Different Term of Input

Remember we can just remove the constants, but there's other case. If there's other input, we can adding up the input (O(a+b) or O(a\*b)). Like in `2input.js`, because there's 2 input, it makes the O become `a+b`. Also in `boxes.js`, we see that if there's a nested for loop, it become `O(n^2)` or n squared or if we look at the `charts.jpeg`, it become Quadratic time.

### 4. Drop Non Dominants (terms)

Take a look to the printall.js example function. We see that theres 2 main loop, but the second loop have a nested loop. If we calculate the Big O here, it will be O(n + n^2). But the rule number four, we can drop non dominants operation if there's dominant one.

### Cheat Sheet

If you confused with my unclear explanation here (obviously). You can take a look to cheat-sheet.pdf file, for a simpler notes of Big O rules.
