import React from 'react';

export default React.createClass({

	/*
	 [] 1. Style component by requiring chat.scss.

	 [] 2. Add placeholder "Type here" to input text.

	 [] 3. This component will render a list of messages, initially the list will be empty.
	 	   When the list is empty, render 'No messages'.

	 [] 4. Hard-code two initial messages. Render them inside of a div with className "messages".
	 	   (Hint: Array.map, key prop)

	 [] 5. This component will also render the new message the user is entering in the text input.
	 	   The new message should be initially empty.
	 	   (Hint: The text input should be a controlled component)

	 [] 6. If the new message is not empty, when the user clicks the submit button,
	 	   add the new message to the message list.

	 [] 7. After adding the new message to the list, reset the new message

	 [] 8. If the new message is not empty, when the user hits the Enter key,
	  	   add the new message to the message list.

	 [] 9. When the component loads, the new message input should have focus
	 	   (Hint: refs and react component lifecycle)

	 [] 10. The user should always be able to see the last message. After a message is added
	   		to the list, the messages div should scroll to the bottom.
	   		(Hint: domElement.scrollTop = domElement.scrollHeight)

	 [] 11. Show the message count inside the "count" div.
	 */

	render() {

		require('./chat.scss');

		return (
			<div className="chat-container">
				<div className="messages">

				</div>
				<div className="message-input">
					<input type="text"/>
				</div>
				<div className="message-button">
					<button>Submit</button>
				</div>
				<div className="count">

				</div>
			</div>
		);
	}
});
