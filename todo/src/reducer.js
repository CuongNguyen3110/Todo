const greet = "Hello world";
const bye = "Good bye";

// actionCreator create action (plain object) from action type
const helloWorld = () => ({
    type: greet
})

const goodBye = () => ({
    type: bye
})

const reducer = (state={}, action) => {
    switch (action.type) {
        case greet:
            return {
                text: greet
            }

        case bye:
            return {
                text: bye
            }
    
        default:
            return state;
    }
}

export {
    reducer,
    helloWorld,
    goodBye
}
