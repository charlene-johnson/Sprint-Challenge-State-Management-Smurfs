1. What problem does the context API help solve?

Context API solves the issue with prop drilling. Context API provides a way to share values between components. It's very helpful with large apps.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions have two properties, type and payload, however payload is optional. The type explains what the action is going to do, as an example you can name an action TOGGLE_BUTTON to toggle a button on and off. A reducer takes an action that is dispatched into it which is passed as the reducer's argument. The reducer updates state. The store contains all of our state for an app and it takes the reducer as an argument. The reason why the store is known as a single source of truth is because it holds all of the state data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global. State held in Application state can be used everywhere on the app, on any component. Component state can only be used on whatever component you put the state on. If you want to use the state on any child componenet it would require prop drilling from the parent to the child. Component state would be good for small apps in which you may only have to prop drill a small amount of times or none at all. Application state is good for big apps.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware which can intercept actions. Redux-thunk allows us to make asynchronous functions because redux is normally synchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management is context api. It is more simpler to use than redux and it makes it so that we don't have to worry about prop drilling. 
