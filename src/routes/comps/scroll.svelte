<script>
    export let buttonVisibleOnPX = 200;
    let hidden = true;

    const goStart = () => {
        document.body.scrollIntoView();
    };

    const scrollElement = () => {
        return document.documentElement || document.body;
    };

    const handleOnScroll = () => {
        if (scrollElement().scrollTop > buttonVisibleOnPX) {
            hidden = false;
        } else {
            hidden = true;
        }
    };





    let y

const scrollHandle = () => {
    if (y > 1500) {
        hidden = false;
    } else {
        hidden = true;
    }
}
</script>

<svelte:window on:scroll={scrollHandle} bind:scrollY={y}/>

<div class="back_to_start" on:click={goStart} class:hidden>Back Up</div>

<style>

    .back_to_start {
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 20px;
        user-select: none;
        bottom: 20px;
        color: yellow;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        background-color: rgb(180, 112, 236);
        padding: 5px;
        font-weight: 500;
        border-radius: 5px;
        border: 2px solid white;
        cursor: pointer;
    }

    .back_to_start:hover {
        color: yellow;
        background-color: rgb(205, 147, 252);
        transform: scale(1.2);
        transition: transform 0.3s;
    }

    .back_to_start:active {
        color: yellow;
        background-color: rgb(180, 112, 236);
        transform: scale(1);
    }

    .back_to_start.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>