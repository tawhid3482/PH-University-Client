import MainLayout from "./components/layout/mainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
function App() {
  return (
    <>
     <ProtectedRoute> <MainLayout /></ProtectedRoute>
    </>
  );
}

export default App;
