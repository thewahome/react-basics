const initState = {
    posts: [
        {
            id: 1,
            title:'squirtle laid an egg',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi illum quaerat in amet optio aliquid dicta iure iusto quam, distinctio pariatur sunt temporibus cumque dignissimos commodi quas suscipit debitis?'
        },
        {
            id: 2,
            title:'charmander laid an egg',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi illum quaerat in amet optio aliquid dicta iure iusto quam, distinctio pariatur sunt temporibus cumque dignissimos commodi quas suscipit debitis?'
        },
        {
            id: 3,
            title:'a fossil was found',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi illum quaerat in amet optio aliquid dicta iure iusto quam, distinctio pariatur sunt temporibus cumque dignissimos commodi quas suscipit debitis?'
        }
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;