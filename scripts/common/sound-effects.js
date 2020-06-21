const SoundEffects = {
    init() {
        let audio = document.createElement('audio');        //
        audio.setAttribute('src', 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_cartoon_bubble_pop_002_40274.mp3?_=1');
        SoundEffects.sounds['bubbleSound'] = audio;

        audio = document.createElement('audio');  
        audio.setAttribute('src', 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_cartoon_bubble_pop_007_40279.mp3?_=1');
        SoundEffects.sounds['glubSound'] = audio;

        audio = document.createElement('audio');
        audio.setAttribute('src', 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-25674/zapsplat_multimedia_game_designed_bubble_pop_010_26276.mp3?_=1');
        SoundEffects.sounds['swipingSound'] = audio;

    },

    sounds: {
        bubbleSound: undefined,
        glubSound: undefined,
        swipingSound: undefined
    },

    playBubbleSound() {
        SoundEffects.sounds['bubbleSound'].play();
    },

    playGlupSound() {
        SoundEffects.sounds['glubSound'].play();
    },

    playSwipingSound() {
        SoundEffects.sounds['swipingSound'].play();
    }
}

export default SoundEffects;
