
Description:

Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
Note

Please don't post issue about difficulty or duplicate.
FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES



function remove(s){
    function removeExFromEnd(string) {
        return string.replace(/!*$/, '');
    }
    var split = s.split(' ');
    
    return split.map(removeExFromEnd).join(' ');  
}
