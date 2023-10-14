export const menuItems = [
  {
    name: "Stations",
    key: "stations",
    icon: "mdi mdi-arrow-left",
    isActive: () => true,
    getPath: ({ currentGarage }) => `${currentGarage.id}/stations`,
  },
];
