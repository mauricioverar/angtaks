export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'baja' | 'media' | 'alta';
  completed: boolean;
  showDescription?: boolean;
}
