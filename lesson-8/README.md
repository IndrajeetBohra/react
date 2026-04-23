# Lesson 8 – Data Mutation, Update Ecommerce Project Data

## Lesson Summary

1. **Data Mutation**
   - Update data in the backend

2. **Types of Requests**
   - `GET`, `POST`, `PUT`, `DELETE`

3. **POST Request**
   - Add products to the cart
   - Create an order

4. **PUT Request**
   - Update the cart

5. **DELETE Request**
   - Delete a product from the cart

6. **Dependency Array**
   - Update the payment summary

7. **useNavigate**
   - Navigate to another page using code

8. **Exercise Changes**
   - 8a Make the **Add to Cart** button in Orders Page work
   - 8b Separate the code that reloads the payment summary into another `useEffect` in `CheckoutPage`
   - 8c Make API call `POST('/api/reset')` via console after adding Axios to the window object (reset data)
   - 8d Create **Added Popup** when adding to cart on HomePage

   **Challenge Exercises**

   ##### Make the update quantity feature work
   - 8e Add a textbox before the quantity label and style it with CSS
   - 8f Add state to track if quantity is being updated (toggle on update click)
   - 8g Create a **controlled input** for the quantity textbox
   - 8h Update quantity when `isUpdating` is true using `PUT /api/cart-items/:productId`
   - 8i Add keyboard events to the quantity input

   ##### Make the search bar work
   - 8j Create a **controlled input** for the search bar and add `onClick` to the search button
   - 8k Use `useNavigate` to go to `/ ?search=${search}`
   - 8l Use `useSearchParams` to get search text and load products using `/api/products?search=${search}`
