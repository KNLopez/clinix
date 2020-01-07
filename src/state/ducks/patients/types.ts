export interface Patient {
  id: string;
  priorityNumber: number;
  image: string;
  name: string;
  consultationType: string;
  reason: string;
  approved: boolean;
}
