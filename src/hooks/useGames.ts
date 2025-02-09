import { GameQuery } from "@/App";
import useData from "./useData";

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
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  // useGames übergibt das ausgewählte Genre an das useData-Hook per params-Objekt.
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platform: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [
      // Ändert sich das gameQuery Object, wird der Effekt-Hook erneut ausgelöst
      //     und die aktualisierten Daten werden heruntergeladen
      gameQuery,
    ]
  );

export default useGames;
