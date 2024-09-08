/**
 * Convierte una cadena de fecha en formato ISO 8601 a un formato `YYYY-MM-DD`.
 * @param isoDateString - La cadena de fecha en formato ISO 8601.
 * @returns La fecha formateada como `YYYY-MM-DD`.
 */
export function formatDate(isoDateString: string): string {
  // Convertir la cadena a un objeto Date
  const dateObject = new Date(isoDateString);
  
  // Obtener el año, mes y día
  const year: number = dateObject.getFullYear();
  const month: number = dateObject.getMonth() + 1; // Los meses están indexados desde 0
  const day: number = dateObject.getDate();
  
//When time is considered
//   const hours = dateObject.getHours();
// const minutes = dateObject.getMinutes();
// const seconds = dateObject.getSeconds();
  
  // Formatear la fecha sin la hora
  //padStart(2, '0'): Asegura que el mes y el día tengan dos dígitos.
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Ejemplo de uso
const isoDateString: string = '2024-09-07T16:33:58Z';
const formattedDate: string = formatDate(isoDateString);
console.log(formattedDate); // Salida: 2024-09-07
