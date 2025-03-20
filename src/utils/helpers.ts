export const formatToUrlParam = (text: string) => {
  return text.trim().replace("'", "").toLowerCase().split(" ").join("+");
}