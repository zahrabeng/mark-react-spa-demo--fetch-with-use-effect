# `fetch` with `useEffect`

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

You've been using React's `useState` hook - which is by far the most common and most important out of the React hooks. Now, we'll look at `useEffect`, which ranks #2 on that list.

## Learning Outcomes

- Use `fetch` inside a `useEffect` hook with an `async` function definition
- Use `fetch` inside a `useEffect` hook by chaining a `.then` callback
- Explain the significance of an empty dependency array
- Use the `&&` short-circuit conditional rendering strategy

## Navigating the demo

> 🎯 **Success criterion:** You can use the `fetch` and `useEffect` recipe to load data from an API without a user needing to take action

The demo shows `fetch` in a `useEffect` in two different styles:

1. With promise `.then` chaining
2. With `async`/`await`

The most important thing to observe with #2 is that the `useEffect` callback does two things:

1. Defines an `async` function
2. Executes the `async` function it just defined

This is a slightly odd pattern but it comes down to the fact that `useEffect` can only take a non-`async` function as its callback (that's just the way it's written), so this is a way of getting around that.

Additionally, we've provided an empty dependency array, `[]`. Remember, `useEffect` watches for a change in values in its dependency array on a render (and runs the effect if it does) - but, since there are no values that could change, it never runs the callback on a future render (although it runs on the first render - all `useEffect` callbacks are run on first render).

Can you implement this pattern to fetch data from a different API, e.g. [Kanye West quotes](https://kanye.rest/)?
