<template>
    
    <v-card
  elevation="2"
  outlined
  shaped
  >
    <v-card-text>
      <h2 id="code-title">Class code</h2>
      <div id="class-code">R00M00</div>
      <v-btn @click="copyCode('R00M00')"
      id="copy-btn">
          Copy
      </v-btn>
    </v-card-text>  

    </v-card>
</template>

<script>
export default {
    methods: {
        async copyCode(code) {
            try {
                await navigator.clipboard.writeText(code);
                alert('Copied');
            } catch($e) {
                alert('Cannot copy');
            }
        }
    }
}
</script>
