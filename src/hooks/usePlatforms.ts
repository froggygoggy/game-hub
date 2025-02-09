import platforms from "@/data/platforms";

// following is not necessary with static data
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// use static Data:
const usePlatforms = () => ({ data: platforms, error: null });

export default usePlatforms;
