React Intro Class

Exercises and solutions are in git branches.

Exercise 09 - Ajax

[] 1. Create a new component ChatGiphys that will render a list of giphys
[] 2. ChatController will own ChatGiphys
[] 3. If the new message starts with '/giphy' then call the giphy api to get a giphy based on the new message
[] 4. When the request completes, fire an action with the giphy data
[] 5. The chat store will handle this action and it will add the new giphy to a list of giphys
[] 6. Chat store should emit change so the ChatGiphys component is updated
[] 7. The giphy api should fire an action for each request state: fetching, failure, success
[] 8. Chat store will handle these actions and will track the giphy request state
[] 9. Create a new component RequestStatus that will render the request states
[] 10. ChatController will own RequestStatus
[] 11. When the request is fetching, RequestStatus should render a ‘Fetching giphy...’ message
[] 12. When the request fails, RequestStatus should render a ‘Request failed!’ message
[] 13. When the request succeeds, RequestStatus should render a ‘Success’ message
[] 14. Use React dev tools to test all the request states
[] 15. When the application loads get the first 2 trending giphys and render them re-using the ChatGiphys and RequestStatus components