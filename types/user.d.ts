export type User = {
  id?: string;
  name?: string;
  email?: string;
  dailyMissions: Mission[];
  dailyCheck: string;
  avatarUrl?: string;
};
