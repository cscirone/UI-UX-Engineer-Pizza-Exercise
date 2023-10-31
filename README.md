# UI-UX-Engineer-Pizza-Exercise

Written by: Christopher Joseph Scirone II

## Research and Insights

### _Potential Users_
As detailed by the user stories, the users of the application will be the store owner, and workers. The user stories specically list a store owner and pizza chef, however it is likely that cashiers and/or whomever is taking pizza orders will likely be using the application as well.

### _Design Assumptions_
The application should be user friendly and will be used to create pizza orders and build out individual pizzas.

It should be assumed that the application will be running on computers and tablet devices, as those are the most likely devices to be used in a restaurant establishment. However, a responsive design will ensure that the application will still display properly on devices of any size.

One assumption that is clear is that duplicate toppings are not allowed. So simply not allowing for the possibility, by making topping selection radio buttons or checkboxes will satisfy this requirement. For example, size selection should be radio buttons, as only one size is allowed to be selected. But for something like meat selection, checkboxes should be used to allow the selection of multiple meats without allowing for the possibility of duplicate meat selection.

From the requirements it is clear that entering duplicate pizza names should be allowed, but the user needs to be notified that a duplicate name has been entered via an error message.

## Wireframes and User Flows

The wireframes and user flows for both user stories can be found at the following figma link:

https://www.figma.com/file/msLt9KizBoxG24DMLvKjWM/UI%2FUX-Engineer-Pizza-Exercise?type=design&node-id=0%3A1&mode=dev

## Prototyping

I chose to prototype the pizza builder user story. In order to view this prototype. simply clone this git repo, and locate it in your file explorer. Under the pages directory, open the pizza_builder.html document in the browser of your choice.

## Design Decisions
When I started the project, I researched existing pizza builder applications on numerous pizza establishments' websites. I gleaned a lot of useful information on what does and does not work. However I also came to the conclusion that I wanted to make my design more simple than those that were already out there. Nearly all of the designs I researched were too cluttered for my taste.

The first decision that was made after the initial wireframes were created was the color scheme. In a real situation, this would be up to the client pretty much entirely, however with this being a proposal type project I was able to consider what colors should be used. I chose to make the backgrounds of both pages white, so as to put the focus on the UI with color. I went with a shade of red and yellow that matches the logo asset that I used for this project. The synergy with the color scheme and the logo makes the page look cohesive and simple in its design. I feel like an application for this purpose should look simple, as the client is going to be staring at it every day during work hours. A simple design allows information to be conveyed effectively, while minimizing ocular and mental stress on the end user.

### _Pizza Builder_

The first decision I made with the pizza builder was what the layout should look like. Ideally the pizza should be showcased heavily. I came to the conclusion that in desktop view it should take up half of the screen to make sure that the toppings and selections that were being chosen were always visible.

The topping selection panel on the right side, had a few design decisions to be made. First was how to handle different categories of customization items. I chose to go with a tab navigation style, as it completely eliminated scrolling from equation. With everything visible on screen at all times, navigation of the page and customization options is streamlined. Everything should always be visible when given the opportunity. The tab navigation style addresses this nicely.

Some of the categories utilize radio buttons and some use checkboxes. This was a decision that was made based on the assumption I made at the start that duplicate toppings should not be allowed to occur. Radio buttons were used for the categories where one option made sense; size, sauce, and cheese. Each of these categories are mutually exclusive. A pizza cannot be small and medium at the same time. However for the categories where multiple options can occur at the same time, checkboxes were used to facilitate mulitple selection.

The pizza name field was tricky to find a place for. I settled on placing it at the bottom of the page. This way, the end user can name their pizza as a last step in the creation process.
 
### _Pizza Manager_

When it comes to Pizza Manager, I decided to reuse a similar layout to the Pizza Builder. I just swapped out the topping selection panel for a list of pizzas. In a real implementation of this UI, I would have the pizza list be a scrollable panel, to maintain the application window size, while allowing for more information to be presented on screen. 

The only other decision exclusive to the Pizza Manager I would like to discuss would be the error message placement for duplicate pizza names. I was initially going to place the error message in the pizza display panel, but I chose to keep it close to the pizza name in the list of pizzas. This way it is clear which pizza the error pertains to.