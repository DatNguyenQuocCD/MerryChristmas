var sound = new Howl({
    src: ['./y2mate (mp3cut.net).mp3'],
    autoplay: true,
    loop: true,
    volume: 1,
    onend: function() {
        console.log('Finished!');
    }
});