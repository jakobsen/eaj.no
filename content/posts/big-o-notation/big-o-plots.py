"""Create the plots for the article on big O notation.
Not very pretty, but it does the job.
"""

from time import time
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


def measure_runtime(f, n_arr):
    times = []
    for n in n_arr:
        arr = np.arange(n)
        start = time()
        f(arr)
        end = time()
        times.append(end - start)
    return times


def plot_runtime(n, t, filename):
    fig, ax = plt.subplots(dpi=200)
    ax.plot(n, t)
    ax.set_xlabel(r"$n$")
    ax.set_ylabel(r"Running time (seconds)")
    plt.tight_layout()
    fig.savefig(filename)


def sum_of_first_two_elements(arr):
    if len(arr) > 1:
        return arr[0] + arr[1]


def sum_of_array(arr):
    total = 0
    n = len(arr)
    for i in range(n):
        total += arr[i]
    return total


# This one will require extra care
def get_index(arr, value):
    n = len(arr)
    for i in range(n):
        if arr[i] == value:
            return i
    return None


# This one takes a long time
def sum_of_everything_multiplied_with_everything(arr):
    n = len(arr)
    result = 0
    for i in range(n):
        for j in range(n):
            result += arr[i] * arr[j]
    return result


if __name__ == "__main__":
    sns.set(context="notebook")

    # Start with plotting the asymptotic example
    def a(n):
        return n ** 2

    def b(n):
        return 1000 * n

    n = np.linspace(0, 1500)
    fig, ax = plt.subplots(dpi=200)
    ax.plot(n, a(n), label=r"$A$")
    ax.plot(n, b(n), label=r"$B$")
    ax.legend()
    ax.set_xlabel(r"$n$")
    ax.set_ylabel(r"Running time (seconds)")
    plt.tight_layout()
    fig.savefig("asymptotic_example.png")

    # Let's plot the example comparing 2n^2 + 3n + 2 to n^2
    n = np.linspace(0, 5)
    fig, ax = plt.subplots(dpi=200)
    ax.plot(n, [2 * x ** 2 + 3 * x + 2 for x in n], label=r"$2n^2 + 3n + 2$")
    ax.plot(n, [x ** 2 for x in n], label=r"$n^2$")
    ax.legend()
    fig.savefig("n_0_to_5.png")
    n = np.linspace(0, 1000)
    fig, ax = plt.subplots(dpi=200)
    ax.plot(n, [2 * x ** 2 + 3 * x + 2 for x in n], label=r"$2n^2 + 3n + 2$")
    ax.plot(n, [x ** 2 for x in n], label=r"$n^2$")
    ax.legend()
    fig.savefig("n_0_to_1000.png")

    # Next, create the running time plots
    n_arr = np.linspace(1, 30000, 15)

    t = measure_runtime(sum_of_first_two_elements, n_arr)
    plot_runtime(n_arr, t, "sum_of_first_two_elements.png")

    t = measure_runtime(sum_of_array, n_arr)
    plot_runtime(n_arr, t, "sum_of_array.png")

    t = measure_runtime(sum_of_everything_multiplied_with_everything, n_arr)
    plot_runtime(n_arr, t, "sum_of_everything_multiplied_with_everything.png")

    # Finaly, do get_index more manually
    times = [[], [], []]

    for n in n_arr:
        arr = np.arange(n)
        values = [0, n // 2, -1]
        for i in range(3):
            start = time()
            get_index(arr, values[i])
            end = time()
            times[i].append(end - start)

    labels = ["First in array", "Halfway in array", "Not in array"]
    fig, ax = plt.subplots(dpi=200)
    for i in range(3):
        ax.plot(n_arr, times[i], label=labels[i])
    ax.legend()
    ax.set_xlabel(r"$n$")
    ax.set_ylabel(r"Running time (seconds)")
    plt.tight_layout()
    fig.savefig("get_index.png")
