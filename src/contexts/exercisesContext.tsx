import React, { createContext, useEffect, useState } from 'react';
import { BodyPartType, ExcerciseItemType } from '../types';
import { exerciseOptions, fetchData } from '../services/fetch';

type ExerciseResponseType ={
 exercices: ExcerciseItemType[];
 total:     number;
}

type BodyPartResponseType = {
    total: number;
    bodyparts: BodyPartType[];
}

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
            try {
                const response: ExerciseResponseType = await fetchData('https://zuka.p.rapidapi.com/', exerciseOptions);
                const exercisesData =  response.exercices;
                const searchedExercises:ExcerciseItemType[] = exercisesData.filter(
                (item:ExcerciseItemType) => item.name.toLowerCase().includes(params)
                    || item.target.toLowerCase().includes(params)
                    || item.equipment.toLowerCase().includes(params)
                    || item.bodyPart.toLowerCase().includes(params),
                );
                setExercises(searchedExercises);
            } catch (err) {
                console.log(err)
            }
            
        }
        return;
    };
   

    useEffect(() => { 
        const fetchExercisesData = async () => {
            try {
                let exercisesData = [];
            if (bodyPart === 'all') {
                const response: ExerciseResponseType = await fetchData('https://zuka.p.rapidapi.com/', exerciseOptions);
                exercisesData = response.exercices;
            } else {
                const response = await fetchData(`https://zuka.p.rapidapi.com/exercices/part/${bodyPart}`, exerciseOptions);
                exercisesData = response.exercice;
            }
            setExercises(exercisesData);
            } catch (err) {
                console.log(err)
            }
            
        };
        const fetchBodyPartsData = async () => { 
            try {
                const response: BodyPartResponseType = await fetchData('https://zuka.p.rapidapi.com/exercices/bodyPart', exerciseOptions);
                setBodyParts(['all', ...response.bodyparts.map(body=>body.part)]);
             } catch (err) {
                console.log(err)
            }
            
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
