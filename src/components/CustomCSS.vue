<template lang="pug">
  .container.mb-5
    .row.mb-5
      .col-12
        h3 Custom CSS
    .row
      .col-6(v-for="(tag,index) in tags")
        .card
          .card-header(:style="{fontSize: tag.size + 'em', color: tag.colour, backgroundColor: tag.backgroundColor}")
            | {{tag.type}}
          .card-body
            .row(v-if="tag.colour")
              .col-12
                .card.mb-2
                  .card-header
                    | Colour
                  .card-body
                    swatches(v-model="tag.colour" colors="text-advanced")
                  .card-footer
                    | {{tag.colour}}
            .row(v-if="tag.colour")
              .col-12
                .card.mb-2
                  .card-header
                    | Background Colour
                  .card-body
                    swatches(v-model="tag.backgroundColor" colors="text-advanced")
                  .card-footer
                    | {{tag.backgroundColor}}
            .row(v-if="tag.size")
              .col-12
                .card.mb-2
                  .card-header
                    | Size
                  .card-body
                    b-form-input(
                      v-model="tag.size"
                      type="number"
                      required
                      min="1"
                      placeholder="1")
</template>
<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
export default {
  components: {
    Swatches
  },
  data() {
    return {
      tags: [
        {
          type: "h1",
          colour: "#ff0000",
          backgroundColor: "#CCCCCC",
          size: 4
        },
        {
          type: "h2",
          colour: "#ff0000",
          backgroundColor: "#999999",
          size: 5
        }
      ]
    };
  },
};
</script>
<style>
</style>