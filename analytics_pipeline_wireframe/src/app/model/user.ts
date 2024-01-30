import { Workspace } from "./workspace";

export class User {
    id!:string;
    profilePictureURL!:string
    username!:string;
    workspaces!: Workspace[];
}
