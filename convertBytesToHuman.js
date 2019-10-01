/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

 export default
function convertBytesToHuman(bytes) {
  if ( !(Number.isInteger(bytes)) || bytes < 0) {
    return false;
  }

  let type_names = ["B", "KB", "MB", "GB", "TB"];

  let i = 0;

  while (bytes >= 1024) {
    bytes = bytes / 1024;
    ++i;
  }

  if (!(Number.isInteger(bytes))){
    bytes = bytes.toFixed(2);
  }

  let answer = bytes + ' ' + type_names[i];

  return answer;
}
