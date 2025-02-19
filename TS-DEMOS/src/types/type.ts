export type info ={
    id:string;
    name: string;
    email: string;

}

// Extend the Info Type for AdminInfoList

export type AdminInfoList = info & {
    role: string;
    permissions: string[];
}