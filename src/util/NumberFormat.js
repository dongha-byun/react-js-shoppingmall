export function numberCommaFormat(input) {
    if(!input || isNaN(input)){
        return 0;
    }
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}