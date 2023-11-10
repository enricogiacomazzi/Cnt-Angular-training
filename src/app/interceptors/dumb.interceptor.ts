import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take, tap } from "rxjs";




@Injectable()
export class DumbInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            url: this.parseUrl(req.url),
            headers: new HttpHeaders({'Authorization': 'Bearer mitoken'})
        })
        return next.handle(newReq); //.pipe(tap(x => console.log('res', x)));
    }

    private parseUrl(url: string): string {
        const placeholder = 'pkm';
        return url.startsWith('pkm') ? url.replace(placeholder, 'https://pokeapi.co/api/v2/pokemon') : url;
    }

}