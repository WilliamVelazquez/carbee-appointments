# Project Reflection

📌**Did you run into any “gotchas” along the way? If so, what were
they and how did you address them?**

Actually, I found issues on the given API so I communicate it with the team in order to get valid endpoints to work on the exercise.

I found differences on the new NextJs version when using next-auth dependency so I opted to handle the authentication by myself with a custom code.

📌**How did you handle forms? In a largely formdriven project, would
you do anything differently? If so, what?**

For the exercise I create an Input and Button component because it was a simple login form. For a large form-driven project I probably opted to use an specific dependency that helps with the forms like formik or react-hook-form but there are also other options. That dependencies helps a lot with validations, styling, async selects and other useful tools related with forms.

📌**How did you handle authorization? In your ideal FE/BE scenario,
what auth strategy would you use?**

For the authorization I was expecting a token from the API that I needed for the HTTP header in other requests, so I use create some utils to set a cookie with the token in order to keep the session trough the tabs and I create a middleware that verify the requests in order to add the Authorization header to the protected routes that requires it.
In my ideal FE/BE scenario I think the HTTP-Only cookies is a good way to go because we can have an API proxy that acts as a layer in front the real API that have access to the cookies existing on the same domain, it can´t be accessed from client-side javasvcript (no third-party scripts or extensions). Also, this helps with CORS issues making all the requests from the same origin. Actually, we have a lot of tools and providers that helps with Authentication like Auth0, Firebase or some AWS tools.

📌**Is there anything you’d like to share about your project prior to
my evaluating it?**

Yes, for this exercise I take the opportunity to try Tailwind css (actually I prefer to work with SASS, Styled components or CSS) and to try the latest version of Next with some changes that I didn´t have the opportunity to work with.

📌**How long did you spend on this exercise? If you had unlimited
more time to spend on this, how would you spend it and how would
you prioritize each item?**

I worked on the exercise in spare moments during my workday and spent the afternoon to finishing it. If I had more time, I would work on adding more functionalities, such as the registration of new users, or the rest of operations for the appointments, create, edit, delete and the same for the availability (for now only the Read section of the CRUD operations is done), then I would like to add some additional security to the token using some tools to encrypt/decrypt and validate it. Finally, I would like to create a better UI, with more defined sections, accessibility, style and interactivity for a better user experience.


# Tech questions

📌**What are three skills, whether javascript library or infrastructure related, that if asked to use today, you could execute without issue?**

ReactJs, NextJs and NodeJs

📌**What are three skills that, if asked to use today, you’d need a refresher, but could ultimately pick back up after a few hours of reviewing documentation?**

AngularJs, Java and SQL

📌**Briefly explain why someone might use Svelte/Sveltekit over "React/NextJS", or vice versa?**

I have no experience working with Svelte but I have read/learn some things about it, both options are stable options for professional web projects, some main differences between them are that Svelte is a recent lighter option that compiles code and with no virtual dom, so it gives better performances and respond times on server start. On the other side React is a flexible, stable and mature option with a big ecosystem where you can find a lot of dependencies, docs and other helpful tools to develop a big project, so there are a lot of devs with experience on it even when it has a learning curve.
It will depend on the project and the team to make a decision on which one to use, but both of them are really good options to work with. In my opinion Svelte is a way to go to create lightweight and fast applications and React is the option for a large scale, enterprise and cross-platform applications.

📌**What is redux, and is React Context a sufficient replacement? What’s your preferred way for handling state?**

Redux is a tool/library for state management that defines a way to handle all the state changes over big applications. It is used to have a single global state for the application that is managed dispatching actions and returning an immutable updated state.
On the other hand, the React Context API share data through the component tree without passing props on every level. For handling states for small projects is easy to work with the Context API and in some cases with the help of the useReducer hook, but in very big projects where involves a large team working together and need to make a lot of API calls redux could be a better way to go. Both of them are useful it depends more on the situation and project which one to use but both can be used since Redux use the Context API.
