export default function useNumExtracter(string){
    
    function number(string){
        return string.match(/\d+/);
    }
    
    return{
        number
    }
}
