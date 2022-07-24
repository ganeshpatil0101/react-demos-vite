import React, {Suspense} from 'react';
import './App.css'
// import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Hello from './pages/Hello';
const Pockemons = React.lazy(()=> import('./pages/Pokemons'));
const Wordle = React.lazy(()=> import('./pages/Wordle/index'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        retry: process.env.NODE_ENV === 'production',
        refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter >
          <Routes>
            <Route path="/" element={<Landing/>}>
              <Route index element={<Hello/>} />
              <Route path="pokemon" element={
                <Suspense fallback={<><span>Loading ... </span></>} >
                  <Pockemons />
                </Suspense>
              } />
              <Route path="wordle" element={
                <Suspense fallback={<><span>Loading ... </span></>} >
                  <Wordle />
                </Suspense>
              } />
              <Route path="hello" element={<Hello />} />
            </Route>
          </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
  )
}

export default App
