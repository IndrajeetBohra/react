# Lesson 7 – React with Backend, Data Fetching, Load Ecommerce Project Data

## Lesson Summary

1. **Backend**
   - Manages the data

2. **Set up a backend**
   - For our project

3. **Data Fetching**

4. **Axios**
   - Easier way to make requests to the backend

5. **Generate HTML**
   - Using data from the backend

6. **Separated pages into smaller components**

7. **Async/Await**
   - Write asynchronous code like normal code

8. **Exercise Changes**
   - 7a Use Async Await to load data in orders page
   - 7b Seperate CartItemDetails from OrderSummary.jsx into Component
   - 7c Separate delivery-date into component.
   - 7d Temporarily remove `<StrictMode>` and check that useEffect runs once.
   - 7e Create OrdersGrid Component from OrdersPage.jsx.
   - 7f In OrdersGrid separate OrderHeader and OrderDetailsGrid into their own components.
   - 7g Display totalQuantity in CheckoutHeader after making separate component (done in prev L6 ex)
   - 7h Pass the cart prop into the header in tracking page to make it work
   - 7i Update Link for Tracking in Orders Page
   - 7j Update Tracking Page route, use Hook useParams to get orderId and productId
   - 7k Load data from backend for Tracking Page. Using axios, useEffect and orderId from the URL
   - 7l Calculate the Progress (how close the product is to delivery)
   - 7m Update 'Arriving on' to 'Delivered on' when percent is >= 100
   - 7n Highlight the correct label based on the delivery percent
   - 7o Pass the cart as prop to the NotFoundPage header
