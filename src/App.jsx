import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/shared/topBar/Index";
import Sidebar from "./components/shared/sidebar/Index";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Team from "./pages/team/Index";
import Invoices from "./pages/invoice/Index";
import Contacts from "./pages/contacts/Index";
import Form from "./pages/form/Index";
import Calendar from "./pages/calendar/Index";
// import Bar from "./pages/dashboard/Dashboard";
// import Line from "./pages/dashboard/Dashboard";
// import Pie from "./pages/dashboard/Dashboard";
// import FAQ from "./pages/dashboard/Dashboard";
// import Geography from "./pages/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=" flex h-screen">
          <Sidebar />
          <main className=" w-full">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoice" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} />/ */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
