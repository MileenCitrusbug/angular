import { AbstractControl } from "@angular/forms";



export function validateemail(control: AbstractControl):{[key:string]:any}|null{
  const email=control.value
 
  // const length = email.length()
  const domain= email.substring(email.lastIndexOf('@')+1);
  // alert(domain)
  if( domain=="yopmail.com" || domain=="mailtred.com")
{
  return {wrong_email:true}

}
else{
  // console.log (domain)
  return null
}


}