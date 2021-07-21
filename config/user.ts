import React from "react";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
  description?: React.ReactNode;
}

const user: User = {
  title: "Tesis de grado",
  description: 
    "Sharon Cazap - Universidad Maimónides - 2021",
  theme: null,
  mainTitle: "Tesis de grado",
  pageTitle: " | Sharon Cazap"
}

export default user;
