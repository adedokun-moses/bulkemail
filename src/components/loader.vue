<template>
    <div class="wrapper">
        <div class="container">
            <svg xmlns="http://www.w3.org/2000/svg" id="diamonds" class="animate fade" width="12em" height="6em"
                viewBox="0 0 128 64">
                <polygon class="diamond left" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="32,61 3,32 32,3 61,32">
                </polygon>
                <polygon class="diamond right" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="90,61 61,32 90,3 119,32">
                </polygon>
                <polygon class="diamond center" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="61,61 32,32 61,3 90,32">
                </polygon>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="diamonds" class="" width="12em" height="6em" viewBox="0 0 128 64">
                <polygon class="diamond left" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="32,61 3,32 32,3 61,32">
                    <animate attributeType="CSS" attributeName="stroke-dashoffset" values="1000;0;1000;1000"
                        keyTimes="0;.4;.8;1" dur="3s" repeatCount="indefinite" id="draw-left" />
                </polygon>
                <polygon class="diamond right" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="90,61 61,32 90,3 119,32">
                    <animate attributeType="CSS" attributeName="stroke-dashoffset" begin="0.5s" values="1000;0;1000;1000"
                        keyTimes="0;.4;.8;1" dur="3s" repeatCount="indefinite" id="draw-right" />
                </polygon>
                <polygon class="diamond center" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="1000" points="61,61 32,32 61,3 90,32">
                    <animate attributeType="CSS" attributeName="stroke-dashoffset" begin="0.25s" values="1000;0;1000;1000"
                        keyTimes="0;.4;.8;1" dur="3s" repeatCount="indefinite" id="draw-center" />
                </polygon>
            </svg>

            <div class="message">Loading...</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    height: 30vh;
    max-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.message {
    font-size: 1.5em;
    text-align: center;
    margin-top: .25em;
    color: #777;
    -webkit-animation: fade 3s ease-in-out 0s infinite;
    animation: fade 3s ease-in-out 0s infinite;
}

#diamonds .diamond {
    stroke: #bbb;
}

#diamonds .left {
    stroke: #8E857B;
}

#diamonds .center {
    stroke: #00ADBB;
    opacity: .6;
}

#diamonds .right {
    stroke: #8E9090;
    opacity: .6;
}

#diamonds.animate .diamond {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transform-origin: center;
}

#diamonds.animate.fade .diamond {
    -webkit-animation: draw 3s ease-in-out 0s infinite;
    animation: fade 3s ease-in-out 0s infinite;
}

#diamonds.animate .center {
    -webkit-animation-delay: .25s;
    animation-delay: .25s;
}

#diamonds.animate .right {
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
}

#diamonds.animate.fade .center {
    animation: fade2 3s ease-in-out 0s infinite;
    -webkit-animation-delay: .25s;
    animation-delay: .25s;
}

#diamonds.animate.fade .right {
    animation: fade2 3s ease-in-out 0s infinite;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
}

@-webkit-keyframes draw {

    0%,
    80%,
    100% {
        stroke-dashoffset: 1000;
    }

    40% {
        stroke-dashoffset: 0;
    }
}

@keyframes draw {

    0%,
    80%,
    100% {
        stroke-dashoffset: 1000;
    }

    40% {
        stroke-dashoffset: 0;
    }
}

@-webkit-keyframes fade {
    0% {
        opacity: .5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: .5;
    }
}

@keyframes fade {
    0% {
        opacity: 1;
    }

    50% {
        opacity: .1;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade2 {
    0% {
        opacity: .6;
    }

    50% {
        opacity: .1;
    }

    100% {
        opacity: .6;
    }
}
</style>