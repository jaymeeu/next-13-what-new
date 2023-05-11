export async function GET(request) {

    //handle get request for api/posts
    const users = [
        {id : 1, name : 'gabriel'},
        {id : 2, name : 'james'},
        {id : 3, name : 'sandra'}
    ]
    return new Response(JSON.stringify(users))
}