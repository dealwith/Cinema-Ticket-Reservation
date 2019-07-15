routeToDisplay (middleawres = [], routeToVisit, directedFrom = '', extra = {}) {
    const mware = {
            privateRoute: ( routeToVisit, directedFrom ) => this.privateRoute( routeToVisit, ),
            alreadyLoggedIn: (routeToVisit) => this.alreadyLoggedIn(routeToVisit),
        adminAccess: (routeToVisit) => this.adminAccess(routeToVisit),
        superAdminAccess: (routeToVisit, directedFrom) => this.superAdminAccess(routeToVisit, directedFrom),
    }
    let ret = null;
    try {
        for (let i = 0; i < middlewares.length; i++) {
            ret = mware[middlewares[i]](routeToVisit, directedFrom, extra)
            if(ret.status === false) {
                break;
            }
        }
        return ret.routeObj
    }catch(e){
        console.log(e)
    }
}

//exmple of private route
function privateRoute( component, pathname = '/' ) {
    return (    
            auth.fetchCurrentUser !== null 
            ?   this._getRouteReturn(true, component)
            :   this._getRouteReturn(false,
                <Redirect to={{ pathname: '/loginPage',
                state: { from: pathname }
                }} />)
            )
}

//another example of accesing page
function adminAccess( component, pathname = '/' ) {
    if(utils.arrayContains(role, 'admin')) {
        return this._getRouteReturn(true, component)
    }
    return this._getRouteReturn(false, 
        <Redirect to={{ 
            pathname: `${this._account_help}${constants.userRoles.admin}`
         }} />)
}