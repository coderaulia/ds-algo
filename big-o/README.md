# Big O Notation

Basically, Big O Notation is how well the problem is solved (by code obviously). But, what is good code?
There are 2 criteria for a good code, Readable which is can be read by other programmers and also Scalable, code that can be scaled.

## O(n) (linear time)

We can test how well the code solve some problem using time. `O(n)` or linear time (on `example1.js`). But actually it depends on what kind of computer performance to test the time performance.
So when we talk about Big O and Scalability, it testing about when we grow/scale our code bigger and bigger input (INCREASES), how much does the algorithm or function to slowing down.
On the `example1.js`, it shows that the `n` is depends on how many input/array stored. For example `O(nemo) = O(1)`, `O(character) = O(the number of array)`, and `O(big) = O(how many number on array)`. The number of operation increase LINEARLY with the input we made.
O(n) is the basic of Big O Notation you can find.

## O(1) (Constant Time)

The number of operation just stay constant depends of the number of element. Like in `example2.js`. No matter how many array element extracted from the `boxes` array, it always be O(1/2/3~) operation.

## Excercise!

Learn how to count how many Big O Notation process on single file (`challenge1.js`).
