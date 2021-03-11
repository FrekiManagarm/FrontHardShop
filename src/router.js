import { Route, Switch } from 'react-router-dom';
import CPUList from './pages/ComponentsList/CPUList/CPUList';
import GPUList from './pages/ComponentsList/GPUList/GPUList';
import HDDList from './pages/ComponentsList/HDDList/HDDList';
import MotherBoardList from './pages/ComponentsList/MotherBoardList/MotherBoardList';
import PSUList from './pages/ComponentsList/PSUList/PSUList';
import RAMList from './pages/ComponentsList/RAMList/RAMList';
import SSDList from './pages/ComponentsList/SSDList/SSDList';
import HomePage from './pages/HomePage';
import StartConfig from './pages/HomePage';
import Step1 from './pages/Configurator/Step1/Step1';
import Step2 from './pages/Configurator/Step2/Step2';
import Step3 from './pages/Configurator/Step3/Step3';
import Step4 from './pages/Configurator/Step4/Step4';
import Step5 from './pages/Configurator/Step5/Step5';
import Step6 from './pages/Configurator/Step6/Step6';
import Step7 from './pages/Configurator/Step7/Step7';

export const AppRouter = () => {
    return (
        <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={CPUList} path="/CPUs" />
            <Route component={GPUList} path="/GPUs" />
            <Route component={HDDList} path="/HDDs" />
            <Route component={MotherBoardList} path="/MotherBoards" />
            <Route component={PSUList} path="/PSUs" />
            <Route component={RAMList} path="/RAMs" />
            <Route component={SSDList} path="/SSDs" />
            <Route component={StartConfig} path="/Configurator" />
            <Route component={Step1} path="/Configurator/Step1"  />
            <Route component={Step2} path="/Configurator/Step2"  />
            <Route component={Step3} path="/Configurator/Step3"  />
            <Route component={Step4} path="/Configurator/Step4"  />
            <Route component={Step5} path="/Configurator/Step5"  />
            <Route component={Step6} path="/Configurator/Step6"  />
            <Route component={Step7} path="/Configurator/Step7"  />
        </Switch>
    )
}