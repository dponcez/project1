function init() {
  const range = document.getElementById("range");

  range.addEventListener("input", ( e ) => {
    const inputValue = +e.target.value;
    const label = e.target.nextElementSibling;

    const inputWidth = getComputedStyle( e.target ).getPropertyValue("width");
    const labelWidth = getComputedStyle(label ).getPropertyValue("witdh");

    const numWidth = +inputWidth.substring( 0, inputWidth.length - 2 );
    const numLabelWidth = +labelWidth.substring( 0, labelWidth.length - 2 );

    const min = +e.target.min;
    const max = +e.target.max;

    const left =  inputValue * ( numWidth / max ) - numLabelWidth / 2 + scale( inputValue, min, max, 10, -30);

    label.style.left = `${ left }px`;
    label.innerHTML = inputValue;
  });

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  };
}

document.addEventListener('DOMContentLoaded', init)