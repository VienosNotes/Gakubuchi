<!--suppress JSUnresolvedVariable -->
<template>
  <div class="main-frame">

    <div id="orig-image-container" class="image-container">
      <canvas id="square-canvas" width="500" height="500"></canvas>
    </div>
    <div id="buttons-container">
      <label id="open-button" class="label-button">
              <span class="material-icons button-icon">
                add_photo_alternate
              </span>
        <span>Open</span>
        <input type="file" id="orig-image-selector" name="Choose"
               accept="image/*" @input="initImages">
      </label>
      <label id="save-button" class="label-button" @click="save">
              <span class="material-icons button-icon">
                save_alt
              </span>
        <span>Save</span>
      </label>
    </div>
    <div id="palette-container">
      <div class="palette">
        <compact-picker v-model="background" id="picker"/>
      </div>
      <div>
        <Checkbox v-model="shadow" :color="primaryColor">Drop shadow</Checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import BlankImage from '../assets/test.jpg';
import { Compact } from 'vue-color';
import Checkbox from 'vue-material-checkbox';

const sp_threshold = 1500; // maximum smartphone screen width
const frame_padding_ratio = 0.04;
const frame_size = 1080;
const shadow_color = '#00000066';
const shadow_offset = 0.01;
const shadow_blur = 0.02;

export default {
  name: 'Main',
  components: {
    'compact-picker': Compact,
    Checkbox
  },
  props: {
    msg: String,
  },
  data() {
    return {
      image: Image,
      background: { hex: '#ffffff'},
      shadow: true,
      primaryColor: '#880000'
    }
  },
  watch: {
    background() {
      let canvas = this.origCanvas;
      this.drawImage(this.origCtx, this.image, canvas.width, canvas.height);
    },
    shadow() {
      let canvas = this.origCanvas;
      this.drawImage(this.origCtx, this.image, canvas.width, canvas.height);
    }
  },
  mounted() {
    // noinspection ES6ModulesDependencies
    let vpWidth = window.visualViewport.width;
    if (vpWidth <= sp_threshold) {
      this.applySpStyle(vpWidth);
    }

    let ctx = this.origCtx;
    let img = new Image();
    img.addEventListener('load', () => {
      this.image = img;
      this.drawImage(ctx, img, this.origCanvas.width, this.origCanvas.height);
    });
    img.src = BlankImage;
  },
  methods: {
    /**
     * Initialize each canvases with loaded image and decolorized when <input> has got a new image.
     * @param {UIEvent} ev an input event of <input>.
     */
    initImages(ev) {
      // noinspection JSUnresolvedVariable
      let file = ev.currentTarget.files[0];
      let reader = new FileReader();
      reader.addEventListener('load', event => {

        // noinspection JSUnresolvedVariable
        let data = event.target.result;
        let image = new Image();
        image.addEventListener('load', () => {
          this.image = image;
          this.drawImage(this.origCtx, image, this.origCanvas.width, this.origCanvas.height);
        });
        image.src = data;
      });
      reader.readAsDataURL(file);
    },
    /**
     * Draw an image into the 2D context as fitted for the canvas.
     * @param {CanvasRenderingContext2D} ctx
     * @param {HTMLImageElement} img
     * @param {number} width Width of Canvas
     * @param {number} height Height of Canvas
     */
    drawImage(ctx, img, width, height) {
      ctx.shadowColor = '#00000000';
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = this.background.hex;
      ctx.fillRect(0, 0, width, height);

      if (this.shadow) {
        ctx.shadowColor = shadow_color;
        ctx.shadowOffsetX = shadow_offset * width;
        ctx.shadowOffsetY = shadow_offset * height;
        ctx.shadowBlur = shadow_blur * width;
      }

      if (img.width > img.height) {
        let drawWidth = width * (1 - frame_padding_ratio * 2);
        let drawHeight = drawWidth * (img.height/img.width);
        let startY = (height - drawHeight)/2;
        ctx.drawImage(img, width * frame_padding_ratio, startY, drawWidth, drawHeight);
      } else {
        let drawHeight = height * (1 - frame_padding_ratio * 2);
        let drawWidth = drawHeight * (img.width/img.height);
        let startX = (width - drawWidth)/2;
        ctx.drawImage(img, startX, height * frame_padding_ratio, drawWidth, drawHeight);
      }
    },
    applySpStyle(vpWidth) {
      let canvasSize = Math.min(vpWidth * 0.7, 500);
      this.origCanvas.width = canvasSize;
      this.origCanvas.height = canvasSize;
    },
    save() {
      let size = frame_size;
      setTimeout(() => {
        let canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        let ctx = canvas.getContext('2d');
        this.drawImage(ctx, this.image, canvas.width, canvas.height);
        canvas.toBlob(b => {
          let url = URL.createObjectURL(b);
          let anchor = document.createElement('a');
          anchor.href = url;
          let now = new Date(Date.now());
          anchor.download = `gakubuchi_${now.getFullYear()}${now.getMonth()}${now.getDate()}_${now.getHours()}${now.getMinutes()}${now.getSeconds()}.png`;
          anchor.click();
          URL.revokeObjectURL(url);
        });
      }, 500);
    },
  },
  computed: {
    /**
     * 2D Context of original image canvas.
     * @returns {CanvasRenderingContext2D | WebGLRenderingContext}
     */
    origCtx() {
      let canvas = this.origCanvas;
      return canvas.getContext('2d');
    },
    /**
     * Canvas for original image.
     * @returns {HTMLCanvasElement}
     */
    origCanvas() {
      // noinspection JSValidateTypes
      return document.getElementById('square-canvas');
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
$themeColor = #800000

$threshold = 1500

.image-container
  @media screen and (min-width: $threshold+ 1 px)
    padding-left 50px
    padding-right 50px
    padding-top 20px

  @media screen and (max-width: $threshold px)
    padding-left 50px
    padding-right 50px
    padding-top 0

#images-container
  @media screen and (min-width: $threshold+ 1 px)
    display flex
    justify-content center
    align-items top
    position relative
    flex-wrap wrap

  @media screen and (max-width: $thoreshold px)
    display flex
    justify-content center
    align-items center
    position relative
    flex-wrap wrap
    flex-direction column

#square-canvas
  //border-color $themeColor
  border solid 1px $themeColor

#palette-container
  display flex
  flex-direction column
  justify-content center
  align-items center

#color-chooser
  vertical-align center

label input
  display none

#buttons-container
  display flex
  justify-content center
  align-items top
  margin 10px

.button-icon
  vertical-align bottom

#open-button
  color white
  background $themeColor
  padding 3px 5px 3px 3px
  border solid 1px $themeColor
  cursor pointer
  border-radius 4px
  display block

#save-button
  color white
  background gray
  padding 3px 5px 3px 3px
  border solid 1px gray
  cursor pointer
  border-radius 4px
  display block

.label-button
  margin 0 20px 0 20px
  user-select none

.label-button:hover
  opacity 0.7

#proc-label
  margin 1px 20px 1px 20px
  user-select none
  color white
  background linear-gradient(to right, orange, gray)
  padding 3px 20px 3px 20px
  border-radius 4px

#cancel-button
  margin 30px
  padding 5px 20px 5px 20px
  border-radius 4px
  border solid 1px white
  cursor pointer
</style>
