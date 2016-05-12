/*
 [] Create dispatcher
 [] Action creator: changeNewMessage
 [] Use action creator from view
 [] Create store that tracks a list of messages and the new message
 [] Expose getter functions for thing that store tracks
 [] View-controller should get initial state from store
 [] View-controller owns ChatContainer, passes data as prop
 [] Store should register to dispatcher to handle actions
 [] Handle change-new-message action and emit change
 [] View controllers need to listen to the change event and need to handle the change
 [] Avoid memory leaks! Need to stop listening when no longer needed
 [] ChatContainer should now take newMessage as a prop
 [] ChatApp needs to render ChatController instead of ChatContainer
 [] Test it, make sure you can change the new-message input text box 
 */