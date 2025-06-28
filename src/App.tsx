import "./App.css";

import AppRoutes from "./AppRoutes";

export interface BlogQuery {
  id: number | null;
  topic: string | null;
  searchText: string | null;
  title: string | null;
  rating: number | null;
  sortOrder: string;
  numberOf: number | null;
}

function App() {
  // const [gameQuery, setGameQuery] = useState<BlogQuery>({} as BlogQuery);
  return <AppRoutes />;
}

export default App;
