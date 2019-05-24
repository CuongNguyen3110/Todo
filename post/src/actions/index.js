
export const recievePostsFromApi = (data) => ({
    type: 'FETCH_POSTS',
    posts: data
})

export const requestPostsFromApi = () => ({
    type: 'REQUEST_POSTS'
})

export const submitPost = (data) => ({
    type: 'SUBMIT_POST',
    payload: data
})

export const createPostSuccess = (data) => ({
    type: 'CREATE_POST_SUCCESS',
    payload: data
})

export const alert = (type) => ({
    type: type
})

export const finishLoading = (type) => ({
    type: type
})

export const changeInput = (type, data) => ({
    type: type,
    payload: data
})

export const changePage = (type, data) => ({
    type: type,
    payload: data
})

export const changeUrl = (type) => ({
    type: type
})

export const searchString = (type, data) => ({
    type: type,
    payload: data
})




