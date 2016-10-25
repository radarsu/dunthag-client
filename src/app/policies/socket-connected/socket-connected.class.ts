import {
    CanActivate, Injectable, Router, Socket,
} from '../../shared/importer';

@Injectable()
export class SocketConnected implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        if (!Socket.socket) {
            this.router.navigate([]);
            return false;
        }

        return true;
    }
}
