/*
In testing, a spy function is one that keeps track of various metadata
regarding its invocations. Some examples of properties that a spy might track include:

Whether it was invoked
How many times it was invoked
What arguments it was called with
What contexts it was called in
What values it returned
Whether it threw an error


For this coding exercise, please implement a spyOn function which takes any function func as a parameter and returns a spy for func.

The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
.returned(val) — returns true if spy ever returned val, else returns false

*/

export function adder(n1, n2) {
    return n1 + n2;
  }
  