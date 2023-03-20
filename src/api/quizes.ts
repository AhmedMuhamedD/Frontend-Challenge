import axios from "axios";

export type Quiz = {
  id: number;
  title: string;
  course: string;
  topic: string;
  dueTo: string;
};

export type Quizes = ReadonlyArray<Quiz>;

export const fetchQuizes = async () => {
  const response = await axios.get<Quizes>("http://localhost:5173/quiz.json");
  return response.data;
};
