import axios from "axios";

export type Announcement = {
  id: number;
  name: string;
  subject: string;
  description: string;
  imgUrl: string;
};

export type Annoucements = ReadonlyArray<Announcement>;

export const fetchAnnouncements = async () => {
  const response = await axios.get<Annoucements>(
    "http://localhost:5173/announcement.json"
  );
  return response.data;
};
