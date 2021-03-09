import { Route, Switch } from 'react-router-dom';
import CPUList from './pages/ComponentsList/CPUList/CPUList';
import GPUList from './pages/ComponentsList/GPUList/GPUList';
import HDDList from './pages/ComponentsList/HDDList/HDDList';
import MotherBoardList from './pages/ComponentsList/MotherBoardList/MotherBoardList';
import PSUList from './pages/ComponentsList/PSUList/PSUList';
import RAMList from './pages/ComponentsList/RAMList/RAMList';
import SSDList from './pages/ComponentsList/SSDList/SSDList';
import HomePage from './pages/HomePage';

export const AppRouter = () => {
    return (
        <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={CPUList} path="" />
            <Route component={GPUList} path="" />
            <Route component={HDDList} path="" />
            <Route component={MotherBoardList} path="" />
            <Route component={PSUList} path="" />
            <Route component={RAMList} path="" />
            <Route component={SSDList} path="" />
        </Switch>
    )
}