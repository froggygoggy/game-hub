import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  // useGames übergibt das ausgewählte Genre an das useData-Hook per params-Objekt.
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    // Hier wird ein array of dependencies übergeben.
    // Ändert sich das selected Genre, wird der Effekt-Hook erneut ausgelöst
    //     und die aktualisierten Daten werden heruntergeladen
    selectedGenre?.id,
  ]);

export default useGames;
