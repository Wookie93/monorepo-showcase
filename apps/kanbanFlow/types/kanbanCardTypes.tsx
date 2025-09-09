type Subtask = {
    title: string;
    isCompleted: boolean;
 }

export type KanbanFullCardProps = {
    title: string;
    description: string;
    numberOfSubtasks: number; 
    numberOfCompletedSubtasks: number;
    listOfSubtasks: Subtask[];
    currentStatus: 'todo' | 'doing' | 'done'; 
 }

 export type KanbanShortCardProps = 
    Pick<KanbanFullCardProps, 'title' | 'numberOfSubtasks' | 'numberOfCompletedSubtasks'>;

export type KanbanColumnProps ={
    status: {
        type: string;
        numberOfTasks: number;
    }; 
    listOfTasks: KanbanShortCardProps[]
}