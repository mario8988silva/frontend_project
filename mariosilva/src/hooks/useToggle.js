import { useState, useCallback } from "react";

/* toogle para abrir/fechar menus */
  const useToggle = (initial = false) => {
    const [state, setState] = useState(initial);
    const toggle = useCallback(() => setState((prev) => !prev), []);
    const close = useCallback(() => setState(false), []);
    const open = useCallback(() => setState(true), []);

    return{isActive: state, toggle, open, close};
  };

  export default useToggle;