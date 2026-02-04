import { ColorModeContext, tokens, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import Topbar from "./components/shared/TopBar";
import Sidebar from "./components/shared/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Invoices from "./pages/Invoice";
import Contacts from "./pages/Contacts";
import Form from "./pages/Form";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/Faq";
import Bar from "./pages/BarChart";
import Pie from "./pages/Pie";
import Line from "./pages/LineChart";
import Geography from "./pages/GeographyChart";

function App() {
  const [theme, colorMode] = useMode();
  const clrTheme = useTheme();
  const colors = tokens(clrTheme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-full">
          <Sidebar />
          <main className="w-full ">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoice" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />/
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
