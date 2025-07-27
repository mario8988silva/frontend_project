  import { revelantIcons } from "./filters";
  
  /* lógica para listar conteudos por categoria */
  export const groupingFilters = /*icons*/revelantIcons.reduce((acc, icon) => {
    /* selecciona aqueles que contenham category:"contact" */
    if (icon.category === "contact") return acc;

    /* todos aqueles que não sejam "contact" */
    if (!acc[icon.category]) {
      acc[icon.category] = [];
    }
    acc[icon.category].push(icon);
    return acc;
  }, {});
