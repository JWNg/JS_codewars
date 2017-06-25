I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
FUNDAMENTALSSTRINGS

                  
                  
const flipper=stringArr=>stringArr.map(v => v.slice(0,-1).toLowerCase() + (v.length >1 ? v.substr(-1).toUpperCase() : v)).reverse().join(' ')
