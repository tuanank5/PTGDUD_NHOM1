//

import { FavoritesProvider } from "./FavoritesContext";
import { AuthProvider } from "./AuthContext";

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        {children}
      </FavoritesProvider>
    </AuthProvider>
  );
};