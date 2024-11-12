export const format = (text) =>
  text.split(" ").slice(1, -2).join(" ").replace(/,$/, "");
export function getOpeningHours(openingHours) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return openingHours[today];
}
export function isOpen(openingHours, currentDate) {
  const today = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  const [openTime, closeTime] = openingHours[today].split("–");

  const [openHour, openMinute] = openTime.split(":");
  const [closeHour, closeMinute] = closeTime.split(":");

  const isOpen =
    (currentHour > openHour ||
      (currentHour === openHour && currentMinute >= openMinute)) &&
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMinute <= closeMinute));

  return isOpen ? true : false;
}