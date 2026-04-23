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
   - 7a Use Async/Await to load data in Orders Page
   - 7b Separate `CartItemDetails` from `OrderSummary.jsx` into a component
   - 7c Separate delivery date into a component
   - 7d Temporarily remove `<StrictMode>` and check that `useEffect` runs once
   - 7e Create `OrdersGrid` component from `OrdersPage.jsx`
   - 7f In `OrdersGrid`, separate `OrderHeader` and `OrderDetailsGrid` into components
   - 7g Display `totalQuantity` in `CheckoutHeader` after making it a separate component (done in previous lesson)

   **Challenge Exercises**
   - 7h Pass the `cart` prop into the Header in Tracking Page
   - 7i Update `Link` for Tracking in Orders Page
   - 7j Update Tracking Page route and use `useParams` to get `orderId` and `productId`
   - 7k Load data from backend for Tracking Page using Axios, `useEffect`, and `orderId` from URL
   - 7l Calculate the progress (how close the product is to delivery)
   - 7m Update "Arriving on" to "Delivered on" when percent ≥ 100
   - 7n Highlight the correct label based on delivery percent
   - 7o Pass the `cart` as prop to the `NotFoundPage` Header
