//api types from https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb

export interface ExcerciseItemType { 
    bodyPart: string
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string,
    secondaryMuscles: string[],
    instructions: string[]
}

export const initialExcerciseItem: ExcerciseItemType = {
    bodyPart:'',
    equipment: '',
    gifUrl: '',
    id: '',
    name: '',
    target: '',
    secondaryMuscles: [],
    instructions: []
};

export interface ExcerciseVideoItemType {
    channelId: string,
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    title: string;
    videoId: string;
    viewCountText: string;
    thumbnails:{height:number,width:number,url:string}[]
}

export interface VideoType { 
    video:ExcerciseVideoItemType
}
