import React, { createContext, useEffect, useState } from 'react';
import { ExcerciseItemType } from '../types';
import { exerciseOptions, fetchData } from '../utils/fetch';


type ExercisesContextType = {
    exercises: ExcerciseItemType[];
    bodyParts: string[];
    bodyPart: string;
    onSearch: (params: string) => void;
    onSelectBodyPart: (params: string) => void;
};

export const ExercisesContext = createContext<ExercisesContextType | undefined>(undefined);

export const ExercisesProvider = ({ children }:{children:React.ReactNode})  => {
    
    const [exercises, setExercises] = useState<ExcerciseItemType[]>([]);
    const [bodyParts, setBodyParts] = useState<string[]>([]);
    const [bodyPart, setBodyPart] = useState<string>('all');


    const onSelectBodyPart = (params: string) => {
        setBodyPart(params)
    };

    const onSearch = async (params:string) => { 
        if (params) { 
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises:ExcerciseItemType[] = exercisesData.filter(
                (item:ExcerciseItemType) => item.name.toLowerCase().includes(params)
                    || item.target.toLowerCase().includes(params)
                    || item.equipment.toLowerCase().includes(params)
                    || item.bodyPart.toLowerCase().includes(params),
            );
            setExercises(searchedExercises);
        }
        return;
    };
   

    useEffect(() => { 
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        };
        const fetchBodyPartsData = async () => { 
            const bodyPartsData:string[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExercisesData();
        fetchBodyPartsData();
    }, [bodyPart]);

  return (
    <ExercisesContext.Provider value={{exercises,bodyParts,bodyPart,onSearch,onSelectBodyPart}}>
      {children}
    </ExercisesContext.Provider>
  );
};
