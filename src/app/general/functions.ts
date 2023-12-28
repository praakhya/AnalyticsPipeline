import { Router } from "@angular/router";
export function navigateTo(url:string, router:Router)  {
    router.navigate([url])
}