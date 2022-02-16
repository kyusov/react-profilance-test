export const approveNews = (id) => ({
    type: 'APPROVE_NEWS',
    payload: id,
})

export const removeNews = (id) => ({
    type: 'REJECT_NEWS',
    payload: id,
})

export const addNews = (news) => ({
    type: 'ADD_NEWS',
    payload: news,
})
