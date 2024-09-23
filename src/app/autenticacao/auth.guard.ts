import { Router } from '@angular/router';
import { inject } from "@angular/core"
import { UserService } from './services/user.service';

export const authGuard = () => {
    const userService = inject(UserService);
    const router = inject(Router)

    if(userService.estaLogado()){
        return true;
    }else{
        router.navigateByUrl('auth/login');
        return false;
    }
}