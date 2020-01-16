---
layout: default
title: "Assignment 3"
---

**Due: Monday, Feb 24th in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 3rd ed.*
==========================================================

6.4-3, 7.2-3, 8.1-4

Heap sort, quick sort, and linear sort implementations

*Hints:*

> 6.1-1 - Recall that a heap is a *nearly complete* binary tree. Furthermore, the *height* of a heap is the maximal number of *edges* from the root to a leaf node.
>
> 6.1-4 - Consider what the heap property enforces with respect to the smallest node, i.e. where in the tree must it be.
>
> 6.4-3 - Explain the difference in run-times for best and worst case heapsort both practically and asymptotically.

**Implementation**

A skeleton project is provided in [CS360\_HeapQuickCountingSort.zip](../assign/src/CS360_HeapQuickCountingSort.zip). The zip file contains both a Visual Studio project and a Linux/OSX makefile to compile the code. **HeapQuickCountingSort.cpp** contains the main routine as well as empty sort function stubs - you should not need to modify **main()** or *any* of the utility functions.

> -   For each input size, the program generates a *random* array **D[]**
> -   **D[]** is copied into the array **A[]** *prior* to each sorting function call (such that each sort works on the *same* data sets)
> -   You may wish to uncomment the **print\_array()** call after writing each sort to test your code for **n**=16 and **NUM\_AVG**=1 to verify the sort is working correctly
> -   Since C++ does not have an **A.length** member variable, I have included a function called **length(A)** which will return the length of the array (which is stored in **A[0]**)
> -   All arrays have been expanded by 1 (with appropriate adjustments to any loops) to agree with the pseudocode from the book where array indices range from **A[1]** -\> **A[n]**
> -   C++ also does not have an **A.heap-size** member variable, the parameter **heap-size** is passed as an additional parameter to any function requiring **A.heap-size**

*Your Task*

Implement the sort algorithm *as given in the pseudocode below* for heap, quick, and counting sort. Insert counter increment statements (note: a **count** global variable is provided), into each sorting function for each *executable* line of *pseudocode* (e.g. count all three lines required to implement a swap as a *single* operation). Use this counter to *empirically* measure the runtime of each sort. Only increment the counter for statements *within* the sorting functions, i.e. do not include any initialization overhead incurred in **main()** or the utility functions. Note that **count** is reset prior to each sort call but the results are stored in a 3D array **counter** which is used to display a table of all results once all the sorts and runs have completed.

Generate runs for 13 input sizes by changing the **\#define MAX\_RUNS** symbolic constant from 1 to 13. This will generate data for increasing powers of 2 from 2<sup>4</sup> = 16 to 2<sup>16</sup> = 65536.

The **\#define NUM\_AVG** sets the number of data sets of each size to generate in order to compute an *average* runtime for random arrays of each size. Once you are confident your sorting code is working, this value should be set to a reasonable number, e.g. 10, to give a good approximation of the *average* runtime of each sort. Note that the larger the value that is chosen, the longer the program will take to run.

The program will run each sort for each input *size* with elements randomly generated from *two* different input *ranges* 

> -   The large range contains elements in the range [1 -\> 32768]
> -   The small range contains elements in the range [1 -\> 1024]

Once the data for all input sizes and both ranges and element ranges have been generated, the program will produce a comma separated table of output. Use this table to make a *meaningful* plot (e.g. using Excel) of the data showing *important* characteristics. In particular:

> -   Plot number of inputs *n* vs. empirical average runtimes as **data points** for both element ranges
> -   Show the *best fit* asymptotic **curve** for **cn lg n** for heap and quick sort, and **cn + k** for counting sort appropriate for the sort. Determine an *approximate* value of **c** (to the nearest 0.5) and  **k** for each sort that fits the actual data relatively well. (Hint: Simply manually choose values for each **c** and plot the corresponding asymptotic curve until it fits the data *reasonably* well, i.e. you do not need to mathematically find the "best-fit" values. **k** is simply a y offset, so select **c** to match the slope and then adjust **k** to vertically adjust the curve.)

**Hint:** To plot **cn lg n** and **cn + k**, consider making another column in the spreadsheet that *computes* **cn lg n** and **cn + k** for each input size *n*. Then plot the empirical data as **points** (with no lines) and the computed values as a **curve** without points.

*Heap Sort*

    HEAPSORT(A)
    1  BUILD-MAX-HEAP(A)
    2  for i = A.length downto 2
    3     exchange A[1] with A[i]
    4     A.heapsize = A.heapsize - 1
    5     MAX-HEAPIFY(A,1)

    BUILD-MAX-HEAP(A)
    1  A.heapsize = A.length
    2  for i = A.length/2 downto 1
    3     MAX-HEAPIFY(A,i)

    MAX-HEAPIFY(A,i)
    1  l = LEFT(i)
    2  r = RIGHT(i)
    3  if l <= A.heapsize and A[l] > A[i]
    4     largest = l
    5  else
    6     largest = i
    7  if r <= A.heapsize and A[r] > A[largest]
    8     largest = r
    9  if largest != i
    10    exchange A[i] with A[largest]
    11    MAX-HEAPIFY(A,largest)
	
*Quick Sort*

    QUICKSORT(A,p,r)
    1  if p < r
    2     q = PARTITION(A,p,r)
    3     QUICKSORT(A,p,q-1)
    4     QUICKSORT(A,q+1,r)
    
    PARTITION(A,p,r)
    1  x = A[r]
    2  i = p - 1
    3  for j = p to r-1
    4     if A[j] <= x
    5        i = i + 1
    6        exchange A[i] with A[j]
    7  exchange A[i+1] with A[r]
    8  return i+1

*Counting Sort*

    COUNTING-SORT(A,B,k)
    1  let C[0..k] be a new array
    2  for i = 0 to k
    3     C[i] = 0
    4  for j = 1 to A.length
    5     C[A[j]] = C[A[j]] + 1
    6  // C[i] now contains the number of elements equal to i
    7  for i = 1 to k
    8     C[i] = C[i] + C[i-1]
    9  // C[i] now contains the number of elements less than or equal to i
    10 for j = A.length downto 1
    11    B[C[A[j]]] = A[j]
    12    C[A[j]] = C[A[j]] - 1

**HINTS:**

Function call statements **DO NOT** increment the counter since their runtime is evaluated by the execution of the function.

Return statement **DO NOT** increment the counter.

Loop statements, i.e. **for** and **while**, will execute *one more* time than the statements in the loop body. Hence a counter can be added to a loop as follows

    for (...) {
       count++;
       // Body of loop
    }
    count++;
    
    while (...) {
       count++;
       // Body of loop
    }
    count++;
        
For logical structures, i.e.**if**, **if/else**, **if/else if/ else**, there will need to be counters in *each* branch for the *total* number of conditions to ensure proper counting dependent on which branch executes

    if (...) {
       count++;
       // Body of if
    }
    
    if (...) {
       count++;
       // Body of if branch
    } else {
       count++;
       // Body of else branch
    }

    if (...) {
       count++;
       // Body of first if branch
    } else if (...) {
       count += 2;
       // Body of second if branch
    } else if (...) {
       count += 3;
       // Body of third if branch
    } else {
       count += however many if conditions there are
       // Body of else branch
    }
