import { AuthToken } from "./auth-token";
import { Workspace } from "./workspace";

export class User {
    profilePictureURL!:string|null;
    username!:string;
    password!:string;
    workspaces!: Workspace[];
    authTokenRoles!: string[];
    refreshToken!:string;
    authToken!:AuthToken;

}
