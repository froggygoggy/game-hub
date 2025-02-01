const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  // der Index soll die Position nach media/ in der Url angeben
  const index = url.indexOf("media/") + target.length;

  // https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  // crop/600/400/ wird nach media/ und vor games eingeschoben
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);

  return newUrl;
};

export default getCroppedImageUrl;
