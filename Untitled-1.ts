// type jobResult={
//     status:"success",output:string}|{status:"fail",reason:string}
// const log=(result:jobResult)=>{
//   switch (result.status){

//     case "success":
//     console.log(result.output)
//     return result.status
    
//     case "fail":
//     return result.status
   
//     default:
//     const exhaustive:never=result;
//     console.log("exhaustive")
//     return exhaustive
//   }  
// }
// log({status:"success",output:"Got it "});
// ---------------------------------------
// function handleInput(data:unknown):number|Error{
//   if(typeof data==="string"&&data!==null){
//     return data.length
//   }
//   throw Error("invalid type of data need string ");
// }
// try {
//   console.log(handleInput({id:1}))
// } catch (error:unknown) {
//   if(error instanceof Error){
//     console.log(error.message)
  
//   }
//   else{
//     console.log("unexpected err",error)
//   }
// }
// ---------------------------------------
// type PaymentMethod={method:"crypto",walletAddress:string,amount:number}|{method:"card",cardNumber:string,amount:number}
// function isCrypto(payment:PaymentMethod):payment is {method:"crypto",walletAddress:string,amount:number}{
//   return payment.method==="crypto";
// }
// function processPayment(payment:PaymentMethod){
//   //log wallet address if the payment is crypto
//   if(isCrypto(payment)){
//     console.log(payment.walletAddress)
//   }
//   else{
//     console.log(payment.cardNumber)
//   }
// }
// ---------------------------------------
// type Message = { message: string };

// function hasMessage(input: unknown): input is Message {
//   return (
//     typeof input === "object" &&
//     input !== null &&
//     "message" in input &&
//     // We cast to 'any' here just to perform the type check
//     typeof (input as any).message === "string"
//   );
// }

// function printLog(data: unknown) {
//   if (hasMessage(data)) {
//     console.log(data.message); 
    
//   } else {
//     console.log("No valid message found");
//   }
// }
// ---------------------------------------
// function AssertFunction(data:unknown):asserts data is {id:String}{
// if(!data||typeof data!=="object"|| !("id" in data)){
//   throw new Error("data does not exist")
// }
// }
// try {
//   AssertFunction({id:"usnadbkj"});
// } catch (error) {
//   console.log(error)
// }
// ---------------------------------------

// function getId(data:{id:string}){
//   return data.id
// }
// ---------------------------------------
// function hasKey<T,K extends keyof T>(object:T,key:K) : T[K]{
// return object[key]
// }
// const user={
//   name:"Shashank Pandey",
//   id:9,isAdmin:true
// }
// const ans=hasKey(user,"isAdmin");
// ---------------------------------------
// function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
//   return items.map(item => item[key])
// }
// const users = [
//   { id: "1", name: "A" },
//   { id: "2", name: "B" }
// ]

// const ids = pluck(users, "id")   // string[]
// const names = pluck(users, "name") 
// console.log(ids)
// ---------------------------------------
// function merge<A,B>(a:A,b:B):A & B{
// const answer={
//   ...a,...b
// }
// return answer
// }
// merge({id:"09"},{name:"shashank"})
// ---------------------------------------

// function fetchApi(method: "GET" | "POST") {}
// //always use const variable with as const
// let method="GET" as const
// fetchApi(method);
// ---------------------------------------
const permissions=["write","Read","delete"] as const;
type Permission=typeof permissions[number]

const api = {
  "/login": "POST",
  "/me": "GET",
}as const;

type Route= keyof typeof api
type method= typeof api[keyof typeof api]
