import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logintype',
    templateUrl: './logintype.page.html',
    styleUrls: ['./logintype.page.scss'],
})

export class LogintypePage implements OnInit {
    
    data: any = {};
    
    constructor(public route: Router) { }
    
    ngOnInit() {
        
    }
    
    onGoToLoginPageHandler(targetedPage:any='') {

        console.log('**** DATA ****');
        console.log(this.data);
        console.log(targetedPage);
        
        const loginData = {
            loginType: targetedPage,
            loginId: '',
            loginName: ''
        };
        
        localStorage.setItem('loginData', JSON.stringify(loginData));
        console.log(JSON.parse(localStorage.getItem('loginData')));
        
        
        if (targetedPage == 'Technician') {
            this.route.navigate(['/techlogin']);
        }
        
        if (targetedPage == 'Customer') {
            this.route.navigate(['/customerlogin']);
        }
    }
    
    ionViewDidEnter() {
        console.log(this.data);
        this.data.loginType = false;
    }
    
    
    test(event:any)
    {
        console.log(event);
    }
    
}
