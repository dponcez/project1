// Create a special function to forces  the waiting of  a few times before running its execution and preventing from being called several times
// This function will be called after being stops it's execution for 'n' milliseconds,
// preventing immediately a fire handling events by the  user
export class Debounce {
    constructor( wait, immediate ) {
        this.wait = wait;
        this.immediate = immediate;
        this.context = null;
        this.timer = null;
        this.later = null;
    }

    // create a callback function
    update( func ) {
        return ( ...args ) => {
            args = arguments;
            this.context = this;
            this.later = () => {
                if( !this.immediate ) { func.apply( this.context, args ) }
            }

            clearTimeout( this.timer );
            this.timer = setTimeout( this.later, this.wait );

            const callNow = this.immediate && !this.timer;

            if( callNow ) { func.apply( this.context, args ) }
        }
    }
}