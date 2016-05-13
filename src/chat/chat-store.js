/*
 [] 1. Create dispatcher
 [] 2. Action creator: changeNewMessage
 [] 3. Use action creator from view
 [] 4. Create store that tracks a list of messages and the new message
 [] 5. Expose getter functions for thing that store tracks
 [] 6. View-controller should get initial state from store
 [] 7. View-controller owns ChatContainer, passes data as prop
 [] 8. Store should register to dispatcher to handle actions
 [] 9. Handle change-new-message action and emit change
 [] 10. View controllers need to listen to the change event and need to handle the change
 [] 11. Avoid memory leaks! Need to stop listening when no longer needed
 [] 12. ChatContainer should now take newMessage as a prop
 [] 13. ChatApp needs to render ChatController instead of ChatContainer
 [] 14. Test it, make sure you can change the new-message input text box
 [] 15. Move submitNewMessage to the flux pattern, remember that the store is already tracking the newMessage, also the store should have the business logic, it is easy to unit test the store
 [] 16. Create a new component (owned by ChatController) that has chat metrics:
	 - it shows number of characters in the new message
	 - it shows the number of messages
	 - It shows the time of the last message. Hint: use Date.toLocaleTimeString()
 */