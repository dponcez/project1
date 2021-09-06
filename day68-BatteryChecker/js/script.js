(() => {
    // Get HTML references
    const battery_color = document.querySelector('.battery__color');
    const battery_value = document.querySelector('.value');
    const charge = document.querySelector('.charge');
    const info = document.querySelector('.info');
    // Get colors
    let light__blue = '#bbf3f3';
	let dark__red = '#eb2929';
	let orange = '#ff5535';
	let blue = '#3498db';

    navigator.getBattery()
        .then( battery => {
            const battery_level = Math.ceil( battery.level * 100 );

            if( battery.level <= 0.15 ) {
                battery_value.innerHTML = `${ battery_level }%`;
                battery_color.style.setProperty('--transparent', dark__red );
                battery_color.style.height = `${ battery_level }%`;
                info.innerHTML = 'battery in critical condition';

            }else if( battery.level <= 0.25 ) {
                battery_value.innerHTML = `${ battery_level }%`;
                battery_color.style.setProperty('--transparent', orange );
                battery_color.style.height = `${battery_level}%`;
                info.innerHTML = "battery low";

            }else if( battery.level > 0.25 && battery.level < 0.90 ) {
                battery_value.innerHTML = `${battery_level}%`;
                battery_color.style.setProperty("--transparent", light__blue );
                battery_color.style.height = `${battery_level}%`;
                info.innerHTML = "battery in good condition";

            }else if( battery.level >= 0.100 ) {
                battery_value.innerHTML = `${battery_level}%`;
                battery_value.style.color = '#ffffff';
                battery_color.style.setProperty("--transparent", blue );
                battery_color.style.height = `${battery_level}%`;
                info.innerHTML = "battery full";
                charge.innerHTML = 'Disconnect the charger from your device'
            }

            if( battery.charging === true ) {
                charge.innerHTML = ' charging...'
            }else {
                charge.innerHTML = 'uncharging...'
            }
        })
        .catch( error => console.log(`Something went wrong: ${ error.message }`))
})()