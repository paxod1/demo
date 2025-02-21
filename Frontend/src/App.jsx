import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Poster from './pages/Poster'
import Contact from './pages/Contact'
import LifeCycleDemo from './pages/LifeClass'
import UseState from './pages/UseState'
import State from './pages/State'
import Box from './pages/Box'
import Reducer from './pages/Reducer'
import Effect from './pages/Effect'
import BollRed from './pages/BollRed'
import Context from './pages/Context'
import Task from './pages/Task'
import Memo from './pages/Memo'
import Ifelse from './pages/Ifelse'
import List from './pages/List'
import Calculator from './pages/Calculator'
import Api from './pages/Api'
import Zomato from './pages/Zomato'

function App() {

  const helo = createBrowserRouter([
    {
      element: <Home />,
      path: "/home"
    },
    {
      element: <About />,
      path: '/about'
    },
    {
      element: <Poster />,
      path: '/poster'
    },
    {
      element: <Contact />,
      path: '/contact'
    },
    {
      element: <UseState />,
      path: '/usestate'
    },
    {
      element: <State />,
      path: '/state'
    },
    {
      element: <Box />,
      path: '/box'
    },
    {
      element: <Reducer />,
      path: '/Reducer'

    }, {
      element: <Effect />,
      path: '/Effect'
    },
    {
      element: <BollRed />,
      path: '/BollRed'
    },
    {
      element: <Context />,
      path: '/context'
    },
    {
      element: <Task />,
      path: '/Task'
    },
    {
      element: <Memo />,
      path: '/memo'
    },
    {
      element: <Ifelse />,
      path: '/ifelse'
    },
    {
      element: <List />,
      path: '/list'
    },
    {
      element: <Calculator />,
      path: '/calculator'
    }, {
      element: <Api />,
      path: '/Api'
    },
    {
      element: <Zomato />,
      path: '/Zomato'
    }
  ])



  return (

    <div>
      <RouterProvider router={helo} />

    </div>

  )
}

export default App