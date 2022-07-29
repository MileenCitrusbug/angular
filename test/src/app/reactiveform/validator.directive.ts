import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailCheck():ValidatorFn
{
  return(control:AbstractControl):{[key:string]:any }| null=>
{
  const email=control.value
  const length = email.length()
  const domain= email.substring(email.lastIndexOf('@')+1);
  if (
    domain=="gmail.com" || domain=="outlook.com"
    ){alert('asd')
         return null
     }
   else { return {wrong_email:'wrong domain'}}
};}