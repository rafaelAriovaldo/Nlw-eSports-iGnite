export function convertsString(minutEs : number){
    const hours = Math.floor(minutEs/60);
    const minutes = minutEs % 60;
     return `${String(hours).padStart(0, '0')}: ${String(minutes).padStart(2, '0')}`;
}
    