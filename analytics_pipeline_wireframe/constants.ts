
export const baseUrl = "/api"
export const urlTree = {
    base:{
        base:"api",
        v1:"api/v1"
    },
    version:"v1",
    auth:{
        base:"auth"
    },
    users:{
        base:"users",
        workspaces:"users/workspaces"
    },
    workspace:{
        base:"workspaces",
    }
}
export const makeUrl = (urlSegments:string[]): string => {
    let url = ""
    for (var seg of urlSegments) {
        url = url+"/"+seg
    }
    return url
}
