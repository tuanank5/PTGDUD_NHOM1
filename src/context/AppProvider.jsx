//

import { FavoritesProvider } from "./FavoritesContext";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
        {children}
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};
