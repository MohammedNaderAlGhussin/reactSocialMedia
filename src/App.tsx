import Toast from "./components/common/Toast/Toast";
import Modal from "./components/layout/Modal/Modal";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Modal />
      <Toast />
    </>
  );
}

export default App;
