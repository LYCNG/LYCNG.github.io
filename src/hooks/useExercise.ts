import { useContext } from "react";
import { ExercisesContext } from "../contexts/exercisesContext";

export const useExcercises = () => {
  const context = useContext(ExercisesContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
