export default function convertTemp(temp) {
  return Math.round(temp - 273.15) + '°';
}