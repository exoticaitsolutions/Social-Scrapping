import { Refine} from "@refinedev/core";


import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { WebRoute } from './route/web';

function App() {
  return (
    <BrowserRouter>
      
        <ColorModeContextProvider>
          
        
              <Refine
              
               
                routerProvider={routerBindings}
               
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "PvPl9z-kw6v7w-R2y92i",
                }}
              >
                  <WebRoute />
              
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
        
        </ColorModeContextProvider>
     
    </BrowserRouter>
  );
}

export default App;
