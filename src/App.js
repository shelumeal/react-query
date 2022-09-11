import { Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import HomePage from "./components/Home.page";
import Navbar from "./components/Navbar";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import SuperheroesPage from "./components/Superheroes.page";
import RQSuperheroPage from "./components/RQSuperhero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/rq-paginated" element={<PaginatedQueriesPage />}></Route>
        <Route
          path="/rq-dependent"
          element={<DependentQueriesPage email="bob@example.com" />}
        ></Route>
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallelPage heroIds={[1, 3]} />}
        ></Route>
        <Route
          path="/rq-super-heroes/:heroId"
          element={<RQSuperheroPage />}
        ></Route>
        <Route path="rq-parallel" element={<ParallelQueriesPage />}></Route>
        <Route path="super-heroes" element={<SuperheroesPage />}></Route>
        <Route path="rq-super-heroes" element={<RQSuperheroesPage />}></Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
