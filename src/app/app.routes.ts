import {
    Connect, DataResolver, ErrorView, Login, NoContent, RouterModule, Routes, SocketConnected, UserView,
    CharacterCreate, CharacterView, Game,
} from './shared/importer';

export const ROUTES: Routes = [{
    path: '',
    component: Connect,
}, {
    path: 'login',
    component: Login,
    canActivate: [SocketConnected],
}, {
    path: 'user/:login',
    component: UserView,
    canActivate: [SocketConnected],
}, {
    path: 'user/:login/character-create',
    component: CharacterCreate,
    canActivate: [SocketConnected],
}, {
    path: 'user/:login/character/:name',
    component: CharacterView,
    canActivate: [SocketConnected],
}, {
    path: 'user/:login/character/:name/game',
    component: Game,
    canActivate: [SocketConnected],
},
{
    path: 'error',
    component: ErrorView,
},
// {
//     path: 'detail',
//     loadChildren: () => System.import('./+detail'),
// },
{
    path: '**',
    component: NoContent,
}];
