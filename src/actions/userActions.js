import $ from 'jquery'

export const UPDATE_USER = 'user:updateUser'
export const SHOW_ERROR = 'user:showError'

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR!!'
        } 
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: "http://google.com",
            success(response) {
                console.log('SUCCESS')
                dispatch(updateUser(response.newUser)) // example not meant to work
            },
            error() {
                console.log('ERROR')
                dispatch(showError())
            } 
        })
    }
}