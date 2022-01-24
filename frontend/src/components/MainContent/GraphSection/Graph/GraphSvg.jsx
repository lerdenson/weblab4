import React from "react";

const GraphSvg = (props) => {
    return(
        <svg width="220" height="220" className="svg-graph" xmlns="http://www.w3.org/2000/svg">

                <line className="axis" x1="10" y1="110" x2="210" y2="110" stroke="black"/>
                <polygon points="210,110 200,105 200,115"/>

                <line className="axis" x1="110" y1="10" x2="110" y2="210" stroke="black"/>
                <polygon points="110,10 105,20 115,20"/>

                <line className="coordinate-line" x1="43" y1="105" x2="43" y2="115" stroke="black"/>
                <text className="coordinate-text coordinate-text_minus-Rx" x="33" y="100" font-size="14">-R</text>

                <line className="coordinate-line" x1="76" y1="105" x2="76" y2="115" stroke="black"/>
                <text className="coordinate-text coordinate-text_minus-half-Rx" x="66" y="100" font-size="14">-R/2
                </text>

                <line className="coordinate-line" x1="143" y1="105" x2="143" y2="115" stroke="black"/>
                <text className="coordinate-text coordinate-text_plus-half-Rx" x="138" y="100" font-size="14">R/2</text>

                <line className="coordinate-line" x1="176" y1="105" x2="176" y2="115" stroke="black"/>
                <text className="coordinate-text coordinate-text_plus-Rx" x="171" y="100" font-size="14">R</text>

                <line className="coordinate-line" x1="105" y1="176" x2="115" y2="176" stroke="black"/>
                <text className="coordinate-text coordinate-text_minus-Ry" x="120" y="181" font-size="14">-R</text>

                <line className="coordinate-line" x1="105" y1="143" x2="115" y2="143" stroke="black"/>
                <text className="coordinate-text coordinate-text_minus-half-Ry" x="120" y="148" font-size="14">-R/2
                </text>

                <line className="coordinate-line" x1="105" y1="76" x2="115" y2="76" stroke="black"/>
                <text className="coordinate-text coordinate-text_plus-half-Ry" x="120" y="81" font-size="14">R/2</text>

                <line className="coordinate-line" x1="105" y1="43" x2="115" y2="43" stroke="black"/>
                <text className="coordinate-text coordinate-text_plus-Ry" x="120" y="48" font-size="14">R</text>

                <polygon className="svg-figure triangle-figure" points="176,110 110,110 110,76"
                         fill="blue" fill-opacity="0.25" stroke="darkblue" stroke-opacity="0.5"/>

                <polygon className="svg-figure rectangle-figure" points="76,176 110,176 110,110 76,110"
                         fill="yellow" fill-opacity="0.25" stroke="#CCCC00" stroke-opacity="0.5"/>

                <path className="svg-figure circle-figure" d="M 111 176 A 70 70 0 0 0 176 110 L 110 110 Z"
                      fill="green" fill-opacity="0.25" stroke="darkgreen" stroke-opacity="0.5"/>
        </svg>
    );
}

export default GraphSvg;
