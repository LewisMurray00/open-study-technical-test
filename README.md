# Front end technical task

## Tasks

- Display an image, product title, description, and an add to basket button (Done)

- Basket should be in the form of a mini basket (Done)

- Add a product to a mini basket, so that we can proceed to purchase (Done)

- View the mini basket, so that we can see all of the products added (Done)

- Update the mini basket, so that an item can be added or removed (Done)

- View the mini basket, so that the total is displayed (Done)

- Mini basket to always display the exact items (Semi Done)


## Project overview

1. Firstly, i read through the briefing and decided to understand what is being asked of me and how i would go about it.

2. After reading through it my next logical step was to install react and create my file, from here i displayed the information that was stored in the API via an async await function.

3. My next step after this, was to create the Navbar that contained a link, which was a mini 'basket'/ shopping cart, this will take you to the customers shopping cart.

4. Upon completion on the Navbar, my next step was to map over the api and display them on the screen, as 'cards'. From here i needed to add a onClick function to the button, this would add the item to a seperate page and hopefully display it. I did however run into a few problems using an API to map over the data and needed to look into useContext/React-redux or maybe i was overthinking a few things.

5. I then decided to use 'mock' data instead as i knew that would be easier to complete the tasks, and with the alloted time set i felt it was better to showcase the project as much as i can rather than being stuck at that point. So once i had hard coded the data from the API. It was time to then create a button and add it to the basket component. I did this using a function in the app.js and passing it down via props.

6. Once the function was created to add to the basket, i then created two seperate buttons within the basket, this would allow the user to add or remove more items from the basket. I reused the same function for the addItem button to the '+', and then to create the remove button it was a simple case of reusing the addItem function but change the code from '+ 1' to '-1'.

7. The next step was to create a variable that worked out the price of all the items in the basket, i done this by multiplying everything that was in the basket by the amount of items there are. 

8. After this was done i focused on displaying the amount of items in the basket. Currently i have it working based on individual items in the basket but it doesn't work if the quantity is increased.