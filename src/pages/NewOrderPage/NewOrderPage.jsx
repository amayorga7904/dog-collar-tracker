import { useState, useEffect } from "react";

export default function NewOrderPage() {
  const [storeItems, setStoreItems] = useState([])

  // - Fetch the storeItems from the server via AJAX
  // - When the data comes back, call setStoreItems to save in state
  useEffect(function() {
    console.log('new order page is rendered')
  })
  return (
    <>
      <h1>NewOrderPage</h1>
      <button onClick={setStoreItems}>Trigger re-render</button>
    </>
  );
}