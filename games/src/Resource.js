class Resources {
    constructor() {
        this.toLoad = {
            sky : "./sprites/sky.png",
            ground : "./sprites/map.png"
        };

        this.images = {}

        //load images
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
              image: img,
              isLoaded: false
            }
            img.onload = () => {
              this.images[key].isLoaded = true;
            }
          })
    }
}

export const resources = new Resources();