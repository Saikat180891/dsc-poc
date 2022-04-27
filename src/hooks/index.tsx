import React from "react";

export const ABtesting = React.createContext({});

declare global {
  interface Window {
    optimizely: any;
  }
}

window.optimizely = window.optimizely || {};

interface ActiveExperiments {
    [key: string]: string;
}
const activeExperimentVariations:ActiveExperiments = {
    "21472860047": "original",
    "21481550155": "3-products",
    "21490130370": "change-price"
}

export const useOptimizely:any = () => {
//   const context = React.useContext(ABtesting);
let variations: any = null;
  const state = window.optimizely.get("state");
  variations = Object.values(state.getVariationMap())[0];
  console.log(variations)
  if(variations && variations?.id in activeExperimentVariations){
    return activeExperimentVariations[variations.id];
  }
  return null;
};
