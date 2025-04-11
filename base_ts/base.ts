type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
function expect(val: any): ToBeOrNotToBe {
    let original_value=val;
    return{
    toBe: function toBe(val){
        if(original_value===val){
            return  true
        }
        else{
            console.log('Not Equal')
            // throw new Error("Not Equal")
            return false;
        }
    },
   notToBe: function notToBe(val){
        if(original_value!== val){
            return true
        }
        else{
            console.log('Equal')
            // throw new Error("Equal")
            return false;
        }
    }
    }
    
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */