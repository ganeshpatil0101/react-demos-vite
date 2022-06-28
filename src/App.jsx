import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import Pockemons from './pages/Pokemons';
import { ReactQueryDevtools } from 'react-query/devtools'
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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Pockemons</h1>
        <div className="pokemon-container" >
          <Pockemons />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
