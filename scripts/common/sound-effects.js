const SoundEffects = {
    init() {
        let audio = document.createElement('audio');        //
        audio.setAttribute('src', 'https://www.mboxdrive.com/bubble_pop.mp3');
        SoundEffects.sounds['bubbleSound'] = audio;

        audio = document.createElement('audio');   
        audio.setAttribute('src', 'https://www.mboxdrive.com/glup_effect.mp3');
        SoundEffects.sounds['glubSound'] = audio;

        audio = document.createElement('audio');   
        audio.setAttribute('src', 'https://www.mboxdrive.com/open_pop.mp3');
        SoundEffects.sounds['poppingSound'] = audio;

    },

    sounds: {
        bubbleSound: undefined,
        glubSound: undefined,
        poppingSound: undefined
    },

    playBubbleSound() {
        SoundEffects.sounds['bubbleSound'].play();
    },

    playGlupSound() {
        SoundEffects.sounds['glubSound'].play();
    },

    playPoppingSound() {
        SoundEffects.sounds['poppingSound'].play();
    }
}

export default SoundEffects;
