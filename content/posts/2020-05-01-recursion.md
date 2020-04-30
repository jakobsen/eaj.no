---
title: "Understandning 'Big O notation'"
author: "Erik André Jakobsen"
date: "2020-05-01"
thumbnail: "../thumbnails/theta.png"
---

When reading about algorithms, you will often see something like _this procedure has a running time of $\mathrm{O}(n)$_ (pronounced "oh of n"). Intuitively, you may understand that this is somehow better than $\mathrm{O}(n^3)$, but what does it really mean? In this article, we'll figure out.

## Running time

In computer science, big O notation is used to describe how long an algorithm takes from start to finish – the running time of the algorithm.

Immediately, you might think that we could just use normal units of time for this, like saying how long it takes in milliseconds. However, this depends upon more than just the algorithm: What hardware are we running on? What language is it written in? How is the input encoded? Saying that computing a value takes 20&nbsp;ms on a supercomputer isn't very helpful for estimating stuff on my laptop.

The solution is to count operations instead. An operation is a simple instruction to the computer. Adding two numbers is an operation, as is comparing two numbers to see if one is bigger than the other. Subtraction, multiplication and division also counts as operations. If I know that two algorithms solve the same problem, and one of them requires 50 operations, whilst the other requires 5000, one of them will obviously be faster than the other.

## Input size

The number of operations required to solve a problem will very often depend on how big our problem is. Sorting a list of ten numbers will require fewer operations than sorting a list of 10&nbsp;000 numbers. Yet, we may use the same algorithm to sort both lists, so we need to use the size of the input to specify how many operations we need. This is where the $n$ part of $\mathrm{O}(n)$ comes in: $n$ is the size of the problem.

The precise meaning of $n$ is highly dependent on the kind of problem. It could mean the length of an array, or it could be the number of vertices in a [graph](<https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)>). Most of the time, it will be obvious from context, and in the cases where it isn't, let's hope the authors take the time to explain it.

## In it for the long run

What about the $\mathrm{O}$ part of $\mathrm{O}(n)$?
