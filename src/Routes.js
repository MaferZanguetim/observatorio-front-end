import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import{ Article, Guide, Initial, News, Population, Project, Researches } from './views'


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" element ={<Initial/>} />
                <Route path = "/article" element ={<Article/>} />
                <Route path = "/guide" element ={<Guide/>} />
                <Route path = "/news" element ={<News/>} />
                <Route path = "/populations" element ={<Population/>} />
                <Route path = "/projects" element ={<Project/>} />
                <Route path = "/researches" element ={<Researches/>} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes