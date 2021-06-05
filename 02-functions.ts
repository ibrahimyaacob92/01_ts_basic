// function addNumbers(a:any, b:any) {  // ? Also works but not recommended
function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

// exporting function
export const addStrings = (str1: string, str2: string = "world"): string =>
  `${str1} ${str2}`;

// multiple data type
export const format = (title:string, param:string|number):string|number => {
    return `${title} ${param}`
}


// in the TSConfig need to change the target to ESNEXT
export const fetchData = (url:string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`)

    function introduce(salutation:string, ...names:string[]):string{
        return `${salutation} ${names.join(" ")}`
    }
}

export function getName(user:{first:string;last:string}): string{
    return `${user.first ?? "first"} ${user.last ?? "last"}`
}