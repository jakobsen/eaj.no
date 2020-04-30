---
title: "Understandning 'Big O notation'"
author: "Erik André Jakobsen"
date: "2020-05-01"
thumbnail: "../thumbnails/theta.png"
---

When reading about algorithms, you will often see something like _this procedure has a running time of $\mathrm{O}(n)$_ (pronounced "oh of n"). Intuitively, you may understand that this is somehow better than $\mathrm{O}(n^3)$, but what does it really mean? In this article, we'll figure out.

If your are new to the concept, some of the paragraphs might look a little intimidating with a lot of symbols. Please don't get discouraged by this: The core idea is simple, so just take your time through the article.

## Running time

In computer science, big O notation is used to describe how long an algorithm takes from start to finish – the running time of the algorithm.

Immediately, you might think that we could just use normal units of time for this, like saying how long it takes in milliseconds. However, this depends upon more than just the algorithm: What hardware are we running on? What language is it written in? How is the input encoded? Saying that computing a value takes 20&nbsp;ms on a supercomputer isn't very helpful for estimating stuff on my laptop. We want a measure that is independent of which computer we have.d

The solution is to count operations instead. An operation is a simple instruction to the computer. Adding two numbers is an operation, as is comparing two numbers to see if one is bigger than the other. Subtraction, multiplication and division also counts as operations. If I know that two algorithms solve the same problem, and one of them requires 50 operations, whilst the other requires 5000, one of them will obviously be faster than the other.

## Input size

The number of operations required to solve a problem will very often depend on how big our problem is. Sorting a list of ten numbers will require fewer operations than sorting a list of 10&nbsp;000 numbers. Yet, we may use the same algorithm to sort both lists, so we need to use the size of the input to specify how many operations we need. This is where the $n$ part of $\mathrm{O}(n)$ comes in: $n$ is the size of the problem.

The precise meaning of $n$ is highly dependent on the kind of problem. It could mean the length of an array, or it could be the number of vertices in a [graph](<https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)>). Most of the time, it will be obvious from context, and in the cases where it isn't, let's hope the authors take the time to explain it.

## In it for the long run

What about the $\mathrm{O}$ part of $\mathrm{O}(n)$? It indicates that we mostly care about what happens when the problem is quite large, or more formally, what happens as $n$ tends to infinity. This is often written as $n \to \infty$.

For instance, consider the following plots:

# TODO: Add some plots

Even though function $A$ is smaller than function $B$ when the problem isn't very big, this changes very quickly as the problem size increases. If your were implementing some algorithm where you don't know the size of the problem in advance, you would want to go for function $B$.

This is exactly what big $\mathrm{O}$ captures; what happens in the long run. Let's make this more precise: Say we have two functions, $f(n)$ and $g(n)$. We say $f(n)$ _belongs to_ $\mathrm{O}(g(n))$ if there is some number $a$, such that for any number $n$ greater than $a$, $f(n)$ is smaller than or equal to $k \cdot g(n)$, where $k$ is some positive constant. We don't know when, but eventually, $f$ will become smaller than $g$ and _stay there_.

This is probably a good time to introduce some friends of $\mathrm{O}$: Theta $\Theta$, and Omega $\Omega$.

Big $\Omega$ is like the opposite of big $\mathrm{O}$: If $f(n)$ belongs to $\Omega(g(n))$, this means $f$ will eventually grow _bigger_ than $g$ and stay there.

Big $\Theta$ is somehow in-between: Intuitively, $f(n)$ belongs to $\Theta(g(n))$ if $f$ _behaves like_ $g$ in the long run. Formally, $f(n)$ belongs to $\Theta(g(n))$ if for all numbers $n$ greater than some number $a$, there are two numbers $c_1$ and $c_2$ such that $f(n)$ is between $c_1 \cdot g(n)$ and $c_2 \cdot g(n)$:

$$
c_1 g(n) \leq f(n) \leq c_2 g(n) \text{ for all $n \geq a$.}
$$

If this doesn't make any sense to you, don't worry about it. The most important part is that somehow, $f$ and $g$ behaves in the same manner as $n$ gets big.

> A common misconception is that big $\mathrm{O}$ will always refer to the worst case of an algorithm, and $\Omega$ will always refer to the best case. This is not true: The running time of an algorithm may be described with whichever of big $\mathrm{O}$, $\Theta$ and $\Omega$ is most fitting. If we don't know how slow an algorithm might get, but we know that it's never faster than $n^2$, we would use $\Omega(n^2)$.

## Keep it simple

If you have seen examples of big $\mathrm{O}$ in the wild, you might have noticed that the examples are always fairly simple: It is always something like $\mathrm{O}(n^2)$, never something more complicated like $\mathrm{O}(5n^2 - 3n + 2)$. The reason for this is that from the definition of big $\mathrm{O}$, we don't really need to worry about constants like $5$, or terms like $3n$ when we also have $n^2$. Let's look at why both of these statements are true:

### We don't need constants

If

## Adding run times

## Examples

Let's try to actually find the runtime of a few algorithms. All of them will process arrays, and $n$ will refer to the length of the array. For instance, if the array is `[1, 5, -2]`, we will have $n=3$.

```py
def sum_of_first_two_elements(arr):
    return arr[0] + arr[1]
```

In the above function, we are always doing the same thing: Get the first two elements, add them together, and return the result. No matter how long the array is, this won't change (unless the array only contains one element and we get an error, but let's ignore that). Therefore, the runtime is $\Theta(1)$.

```py
def sum_of_array(arr):
    total = 0
    n = len(arr)
    for i in range(n):
        total += arr[i]
    return total
```

This is a little more involved. We are iterating through the entire list, and tallying up the total. We need to create a counter variable, then go through everything, and finally return the value. So our runtime is $T(n) = n + 1 = \Theta(n)$.

```py
def get_index(arr, value):
    n = len(arr)
    for i in range(n):
        if arr[i] == value:
            return i
    return None
```

This function will search an array for a given `value`, element by element. If any element matches the value we are looking for, the function returns the current index. If we go through the whole array without finding the correct value, we return `py›None`, indicating the value isn't in the array. This means that we might get to quit early when we are looking for something that happens to be in the front of the array, or we might be unlucky and look for something that isn't there. This means the runtime is $T(n) = \mathrm{O}(n)$.
