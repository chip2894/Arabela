import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-area-trabajo',
  standalone: false,
  templateUrl: './area-trabajo.html',
  styles: ``
})
export class AreaTrabajo implements OnInit {
//#region Variables
    breadcrumbItems: MenuItem[] = [];
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] };
//#endregion

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.updateBreadcrumb();

        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe( () => {
            this.updateBreadcrumb();
        });
    }

    private updateBreadcrumb(){
        const currentRoute = this.route.root;
        this.breadcrumbItems = this.buildBreadcrumb(currentRoute);
    }

    private buildBreadcrumb(route: ActivatedRoute, url: String = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
        const children: ActivatedRoute[] = route.children;
        if(children.length === 0){
            return breadcrumbs
        }
        for(const child of children){
            const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
            if(routeUrl){
                url += `/${routeUrl}`;
            }
            const label = child.snapshot.data['breadcrumb'];
            const icon = child.snapshot.data['icon'];
            if(label){
                breadcrumbs.push({label, icon, routerLink: [url]});
            }
            return this.buildBreadcrumb(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
