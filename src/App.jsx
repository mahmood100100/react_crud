import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Index from './componants/user/Index.jsx'
import Create from './componants/user/Create.jsx'
import Details from './componants/user/Details.jsx'
import Edit from './componants/user/Edit.jsx'
export default function App() {
  return (
    <Routes>
      <Route path='/' element = {<Index/>}/>
       <Route path='/user/index' element = {<Index/>}/>
       <Route path='/user/create' element = {<Create/>}/>
       <Route path='/user/:id' element = {<Details/>}/>
       <Route path='/user/edit/:id' element = {<Edit/>}/>
       <Route path='*' element = {<h2>Page not found</h2>}/>
    </Routes>
  )
}
