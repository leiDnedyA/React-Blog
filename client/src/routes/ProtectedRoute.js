
function ProtectedRoute({ user, children }){

    console.log(user)

    if( !user ){
        return <h1>You must login to a valid account before posting...</h1>
    }

    return children
}

export default ProtectedRoute;