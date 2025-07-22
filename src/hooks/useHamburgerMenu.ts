import { useState, useCallback } from 'react';

function useHamburgerMenu(): [boolean, () => void] {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevOpen) => !prevOpen);
  }, []);

  return [menuOpen, toggleMenu];
}

export default useHamburgerMenu;